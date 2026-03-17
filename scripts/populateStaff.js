import { coaches, athletes, boardMembers, drivers } from "../data/data.js";

/**
 * Convert name to URL-friendly slug
 */
function toSlug(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Populate a grid with people cards
 * @param {string} gridId - ID of the container element
 * @param {Array} people - Array of people objects
 * @param {string} type - Type: 'coach', 'athlete', 'board', 'driver'
 */
function populateStaff(gridId, people, type) {
  const grid = document.getElementById(gridId);

  if (!grid) {
    console.warn(`Grid element #${gridId} not found`);
    return;
  }

  people.forEach(person => {
    const card = document.createElement("a");
    card.className = "team-card";
    card.href = `bio.html?type=${type}&id=${toSlug(person.name)}`;
    card.style.textDecoration = "none";
    card.style.color = "inherit";
    card.style.cursor = "pointer";

    // Check if image is emoji or URL
    const isEmoji = person.image && person.image.length <= 4;
    const imageContent = isEmoji
      ? person.image
      : `<img src="${person.image}" alt="${person.name}">`;

    // Build role/title text
    let roleText = '';
    if (person.role) roleText = person.role;
    else if (person.title) roleText = person.title;
    else if (type === 'athlete') roleText = 'Team Athlete';
    else if (type === 'driver') roleText = 'Driver';

    card.innerHTML = `
      <div class="team-card-image">${imageContent}</div>
      <div class="team-card-content">
        <h3>${person.name}</h3>
        ${roleText ? `<p class="role">${roleText}</p>` : ''}
      </div>
    `;

    grid.appendChild(card);
  });

  console.log(`Populated ${people.length} ${type}(s) into #${gridId}`);
}

// Auto-populate grids if elements exist on the page
if (document.getElementById('coachGrid')) {
  populateStaff('coachGrid', coaches, 'coach');
}

if (document.getElementById('driverGrid')) {
  populateStaff('driverGrid', drivers, 'driver');
}

if (document.getElementById('athleteGrid')) {
  populateStaff('athleteGrid', athletes, 'athlete');
}

if (document.getElementById('boardGrid')) {
  populateStaff('boardGrid', boardMembers, 'board');
}

// Export for manual use if needed
export { populateStaff };
