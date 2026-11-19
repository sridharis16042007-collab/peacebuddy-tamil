const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processImages() {
  const publicDir = path.join(__dirname, '..', 'public');
  const assetsDir = path.join(publicDir, 'assets');

  console.log('Optimizing images with Sharp...');

  // 1. Convert SVG emblem to high-res PNG, WebP, AVIF
  const svgPath = path.join(publicDir, 'Peace_Buddy_Teal_Circular_Emblem.svg');
  if (fs.existsSync(svgPath)) {
    // 512x512 crisp WebP
    await sharp(svgPath)
      .resize(512, 512)
      .webp({ quality: 90 })
      .toFile(path.join(publicDir, 'Peace_Buddy_Teal_Circular_Emblem.webp'));
    
    // 512x512 crisp AVIF
    await sharp(svgPath)
      .resize(512, 512)
      .avif({ quality: 85 })
      .toFile(path.join(publicDir, 'Peace_Buddy_Teal_Circular_Emblem.avif'));

    // Copy to assets folder as well
    await sharp(svgPath)
      .resize(512, 512)
      .webp({ quality: 90 })
      .toFile(path.join(assetsDir, 'Peace_Buddy_Teal_Circular_Emblem.webp'));
    
    await sharp(svgPath)
      .resize(512, 512)
      .avif({ quality: 85 })
      .toFile(path.join(assetsDir, 'Peace_Buddy_Teal_Circular_Emblem.avif'));

    // High-res crisp PNG
    await sharp(svgPath)
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, 'Peace_Buddy_Teal_Circular_Emblem.png'));

    await sharp(svgPath)
      .resize(512, 512)
      .png()
      .toFile(path.join(assetsDir, 'Peace_Buddy_Teal_Circular_Emblem.png'));
    
    console.log('✓ Converted emblem to WebP, AVIF, PNG');
  }

  // 2. Convert ref-aurora.jpg to WebP and AVIF for hero background
  const auroraJpg = path.join(assetsDir, 'ref-aurora.jpg');
  if (fs.existsSync(auroraJpg)) {
    await sharp(auroraJpg)
      .resize(1920, 1080, { fit: 'cover' })
      .webp({ quality: 80, effort: 6 })
      .toFile(path.join(assetsDir, 'ref-aurora.webp'));
    
    await sharp(auroraJpg)
      .resize(1920, 1080, { fit: 'cover' })
      .avif({ quality: 75 })
      .toFile(path.join(assetsDir, 'ref-aurora.avif'));

    console.log('✓ Converted ref-aurora.jpg to WebP & AVIF');
  }

  // 3. Convert chakra-meditation.jpg to WebP
  const chakraJpg = path.join(assetsDir, 'chakra-meditation.jpg');
  if (fs.existsSync(chakraJpg)) {
    await sharp(chakraJpg)
      .resize(800, 800, { fit: 'cover' })
      .webp({ quality: 80 })
      .toFile(path.join(assetsDir, 'chakra-meditation.webp'));

    console.log('✓ Converted chakra-meditation.jpg to WebP');
  }

  console.log('All image optimizations completed successfully.');
}

processImages().catch(err => {
  console.error('Image optimization error:', err);
});
