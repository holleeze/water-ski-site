import { galleryImages } from "./data.js";

const galleryGrid = document.querySelector(".gallery-grid");

// Clear existing placeholders
galleryGrid.innerHTML = "";

galleryImages.forEach(img => {
  const item = document.createElement("div");
  item.className = "gallery-item";

  item.innerHTML = `
    <img src="../images/gallery/${img.filename}" alt="${img.alt}">
  `;

  galleryGrid.appendChild(item);
});
