import { galleryImages } from '../data/gallery_data.js';

const galleryGrid = document.querySelector(".gallery-grid");

if (!galleryGrid) {
  console.error('Gallery grid not found');
} else {
  // Clear existing content
  galleryGrid.innerHTML = "";

  if (galleryImages.length === 0) {
    galleryGrid.innerHTML = '<p style="text-align: center; color: rgba(10, 10, 10, 0.5);">No gallery images available yet.</p>';
  } else {
    galleryImages.forEach(img => {
      const item = document.createElement("div");
      item.className = "gallery-item";
      item.innerHTML = `
        <img src="images/gallery/${img.filename}" alt="${img.alt}" loading="lazy">
      `;
      galleryGrid.appendChild(item);
    });

    console.log(`Loaded ${galleryImages.length} gallery image(s)`);
  }
}
