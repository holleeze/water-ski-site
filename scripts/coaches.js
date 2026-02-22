import { coaches } from "../data/data.js";

// Helper: convert name to URL-friendly slug
function toSlug(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const grid = document.getElementById("coachGrid");

coaches.forEach(coach => {
  const card = document.createElement("a"); // Changed from div to anchor
  card.className = "team-card";
  card.href = `bio.html?type=coach&id=${toSlug(coach.name)}`;
  card.style.textDecoration = "none";
  card.style.color = "inherit";
  card.style.cursor = "pointer";

  // Check if image is emoji or URL
  const isEmoji = coach.image && coach.image.length <= 4;
  const imageContent = isEmoji 
    ? coach.image 
    : `<img src="${coach.image}" alt="${coach.name}">`;

  card.innerHTML = `
    <div class="team-card-image">${imageContent}</div>
    <div class="team-card-content">
      <h3>${coach.name}</h3>
      <p class="role">${coach.role}</p>
      <p>${coach.bio.substring(0, 100)}${coach.bio.length > 100 ? '...' : ''}</p>
    </div>
  `;

  grid.appendChild(card);
});
