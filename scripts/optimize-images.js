const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processImages() {
  const publicDir = path.join(__dirname, '..', 'public');
  const assetsDir = path.join(publicDir, 'assets');

  console.log('Optimizing images with Sharp...');

  const logoPng = path.join(publicDir, 'Peace_Buddy_Teal_Circular_Emblem.png');
  if (fs.existsSync(logoPng)) {
    // Generate WebP
    await sharp(logoPng)
      .resize(1024, 1024, { fit: 'inside' })
      .webp({ quality: 92 })
      .toFile(path.join(publicDir, 'Peace_Buddy_Teal_Circular_Emblem.webp'));

    // Generate AVIF
    await sharp(logoPng)
      .resize(1024, 1024, { fit: 'inside' })
      .avif({ quality: 88 })
      .toFile(path.join(publicDir, 'Peace_Buddy_Teal_Circular_Emblem.avif'));

    // Copy to assets folder
    await sharp(logoPng)
      .resize(1024, 1024, { fit: 'inside' })
      .webp({ quality: 92 })
      .toFile(path.join(assetsDir, 'Peace_Buddy_Teal_Circular_Emblem.webp'));

    await sharp(logoPng)
      .resize(1024, 1024, { fit: 'inside' })
      .avif({ quality: 88 })
      .toFile(path.join(assetsDir, 'Peace_Buddy_Teal_Circular_Emblem.avif'));

    console.log('✓ Successfully converted official logo to WebP & AVIF');
  }

  console.log('All image optimizations completed successfully.');
}

processImages().catch(err => {
  console.error('Image optimization error:', err);
});
