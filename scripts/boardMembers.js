import { boardMembers } from "../data/data.js";

// Helper: convert name to URL-friendly slug
function toSlug(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const grid = document.getElementById("boardGrid");

boardMembers.forEach(member => {
  const card = document.createElement("a");
  card.className = "team-card";
  card.href = `bio.html?type=board&id=${toSlug(member.name)}`;
  card.style.textDecoration = "none";
  card.style.color = "inherit";
  card.style.cursor = "pointer";

  // Check if image is emoji or URL
  const isEmoji = member.image && member.image.length <= 4;
  const imageContent = isEmoji 
    ? member.image 
    : `<img src="${member.image}" alt="${member.name}">`;

  card.innerHTML = `
    <div class="team-card-image">${imageContent}</div>
    <div class="team-card-content">
      <h3>${member.name}</h3>
      <p class="role">${member.title}</p>
      ${member.occupation ? `<p>${member.occupation}</p>` : ''}
    </div>
  `;

  grid.appendChild(card);
});
