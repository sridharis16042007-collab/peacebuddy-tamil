const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processImages() {
  const publicDir = path.join(__dirname, '..', 'public');
  const assetsDir = path.join(publicDir, 'assets');

  console.log('Optimizing images with Sharp...');

  const cloudJpg = path.join(assetsDir, 'cloud-serenity.jpg');
  if (fs.existsSync(cloudJpg)) {
    await sharp(cloudJpg)
      .resize(1920, 1080, { fit: 'cover' })
      .webp({ quality: 85 })
      .toFile(path.join(assetsDir, 'cloud-serenity.webp'));

    await sharp(cloudJpg)
      .resize(1920, 1080, { fit: 'cover' })
      .avif({ quality: 80 })
      .toFile(path.join(assetsDir, 'cloud-serenity.avif'));

    console.log('✓ Successfully converted cloud-serenity.jpg to WebP & AVIF');
  }

  console.log('All image optimizations completed.');
}

processImages().catch(err => {
  console.error('Image optimization error:', err);
});
