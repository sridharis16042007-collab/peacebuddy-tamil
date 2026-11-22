-- =====================================================================
-- PEACE BUDDY TAMIL — CLASS SCHEDULING SYSTEM DATABASE SCHEMA
-- Supabase / PostgreSQL with Row Level Security (RLS)
-- =====================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. CLASSES TABLE
CREATE TABLE IF NOT EXISTS public.classes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    description TEXT,
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    duration_minutes INTEGER NOT NULL CHECK (duration_minutes > 0),
    meet_link TEXT NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('scheduled', 'postponed', 'cancelled')) DEFAULT 'scheduled',
    original_date DATE,
    original_time TIME,
    postpone_reason TEXT,
    cancel_reason TEXT,
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index for speedy querying by date and status
CREATE INDEX IF NOT EXISTS idx_classes_date_status ON public.classes(date, status);

-- 3. USER ROLES TABLE (Kept separate from public profiles for security)
CREATE TABLE IF NOT EXISTS public.user_roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('admin', 'customer')) DEFAULT 'customer',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT user_roles_user_id_key UNIQUE (user_id)
);

CREATE INDEX IF NOT EXISTS idx_user_roles_user_id ON public.user_roles(user_id);
CREATE INDEX IF NOT EXISTS idx_user_roles_role ON public.user_roles(role);

-- 4. SUBSCRIBERS TABLE (Newsletter & Class Notification Recipients)
CREATE TABLE IF NOT EXISTS public.subscribers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    is_subscribed BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_subscribers_email ON public.subscribers(email);
CREATE INDEX IF NOT EXISTS idx_subscribers_subscribed ON public.subscribers(is_subscribed);

-- 5. EMAIL LOGS TABLE
CREATE TABLE IF NOT EXISTS public.email_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    class_id UUID REFERENCES public.classes(id) ON DELETE SET NULL,
    recipient_email TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('created', 'updated', 'postponed', 'cancelled', 'reminder')),
    status TEXT NOT NULL CHECK (status IN ('sent', 'failed')) DEFAULT 'sent',
    error_message TEXT,
    sent_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_email_logs_class_id ON public.email_logs(class_id);
CREATE INDEX IF NOT EXISTS idx_email_logs_sent_at ON public.email_logs(sent_at DESC);

-- =====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================================

-- Enable RLS on all tables
ALTER TABLE public.classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_logs ENABLE ROW LEVEL SECURITY;

-- Helper Function: Check if the currently authenticated user is an admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.user_roles
        WHERE user_id = auth.uid() AND role = 'admin'
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ---------------------------------------------------------------------
-- POLICIES FOR `classes`
-- ---------------------------------------------------------------------

-- Admins can do everything (Create, Read, Update, Delete)
CREATE POLICY "Admins have full access to classes"
    ON public.classes
    FOR ALL
    TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

-- Logged-in customers can view scheduled & postponed classes
CREATE POLICY "Logged in customers can view active classes"
    ON public.classes
    FOR SELECT
    TO authenticated
    USING (status IN ('scheduled', 'postponed', 'cancelled'));

-- Public/Anonymous visitors can read scheduled & postponed classes (Meet links masked via API or view)
CREATE POLICY "Public can view active class schedules"
    ON public.classes
    FOR SELECT
    TO anon
    USING (status IN ('scheduled', 'postponed', 'cancelled'));

-- ---------------------------------------------------------------------
-- POLICIES FOR `user_roles`
-- ---------------------------------------------------------------------

-- Only admins can view or modify user roles
CREATE POLICY "Admins can manage user roles"
    ON public.user_roles
    FOR ALL
    TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

-- Users can read their own role
CREATE POLICY "Users can read own role"
    ON public.user_roles
    FOR SELECT
    TO authenticated
    USING (user_id = auth.uid());

-- ---------------------------------------------------------------------
-- POLICIES FOR `subscribers`
-- ---------------------------------------------------------------------

-- Admins can view all subscribers
CREATE POLICY "Admins can manage subscribers"
    ON public.subscribers
    FOR ALL
    TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

-- Any user can insert/subscribe
CREATE POLICY "Anyone can subscribe"
    ON public.subscribers
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Users can view and update their own subscription status
CREATE POLICY "Users can update their own subscription"
    ON public.subscribers
    FOR UPDATE
    TO anon, authenticated
    USING (email = current_setting('request.jwt.claim.email', true) OR user_id = auth.uid());

-- ---------------------------------------------------------------------
-- POLICIES FOR `email_logs`
-- ---------------------------------------------------------------------

-- Only admins can read email logs
CREATE POLICY "Admins can view email logs"
    ON public.email_logs
    FOR SELECT
    TO authenticated
    USING (public.is_admin());

-- Service role / Edge functions can insert email logs
CREATE POLICY "Service can insert email logs"
    ON public.email_logs
    FOR INSERT
    TO authenticated, service_role
    WITH CHECK (true);
