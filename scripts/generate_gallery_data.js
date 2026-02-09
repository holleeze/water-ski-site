import fs from 'fs';
import path from 'path';

const GALLERY_DIR = './images/gallery';
const OUTPUT_FILE = './data/gallery_data.js';

/**
 * Get all image files from gallery directory
 */
function getGalleryImages() {
  if (!fs.existsSync(GALLERY_DIR)) {
    console.error(`Gallery directory not found: ${GALLERY_DIR}`);
    return [];
  }

  const files = fs.readdirSync(GALLERY_DIR);

  // Filter for image files only
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return imageExtensions.includes(ext);
  });

  // Sort alphabetically for consistent ordering
  imageFiles.sort();

  // Generate image data with auto-generated alt text
  return imageFiles.map((filename, index) => ({
    filename: filename,
    alt: `Saskatoon Water Ski Club - Photo ${index + 1}`
  }));
}

/**
 * Generate the gallery data file
 */
function generateGalleryData() {
  console.log('Scanning gallery directory...\n');

  const images = getGalleryImages();

  if (images.length === 0) {
    console.log('No images found in gallery directory.');
    return;
  }

  const output = `/**
 * Auto-generated gallery data
 * Generated: ${new Date().toISOString()}
 * DO NOT EDIT MANUALLY - Run generate_gallery_data.js instead
 */

/**
 * @typedef {Object} GalleryImage
 * @property {string} filename - Image filename
 * @property {string} alt - Alt text for the image
 */

/**
 * Gallery images
 * @type {GalleryImage[]}
 */
export const galleryImages = ${JSON.stringify(images, null, 2)};
`;

  fs.writeFileSync(OUTPUT_FILE, output);
  console.log(`✓ Generated gallery_data.js with ${images.length} image(s)`);

  images.forEach((img, i) => {
    console.log(`  ${i + 1}. ${img.filename}`);
  });
}

generateGalleryData();
