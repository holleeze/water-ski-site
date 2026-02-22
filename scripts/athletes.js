import { athletes } from "../data/data.js";

// Helper: convert name to URL-friendly slug
function toSlug(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const grid = document.getElementById("athleteGrid");

athletes.forEach(athlete => {
  const card = document.createElement("a");
  card.className = "team-card";
  card.href = `bio.html?type=athlete&id=${toSlug(athlete.name)}`;
  card.style.textDecoration = "none";
  card.style.color = "inherit";
  card.style.cursor = "pointer";

  // Check if image is emoji or URL
  const isEmoji = athlete.image && athlete.image.length <= 4;
  const imageContent = isEmoji 
    ? athlete.image 
    : `<img src="${athlete.image}" alt="${athlete.name}">`;

  // Athletes may not have bio/role yet, handle gracefully
  const bioPreview = athlete.bio 
    ? `<p>${athlete.bio.substring(0, 100)}${athlete.bio.length > 100 ? '...' : ''}</p>`
    : '';

  card.innerHTML = `
    <div class="team-card-image">${imageContent}</div>
    <div class="team-card-content">
      <h3>${athlete.name}</h3>
      ${athlete.role ? `<p class="role">${athlete.role}</p>` : '<p class="role">Team Athlete</p>'}
      ${bioPreview}
    </div>
  `;

  grid.appendChild(card);
});
