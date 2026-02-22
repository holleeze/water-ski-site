import { coaches, athletes, boardMembers } from "../data/data.js";

// Helper: convert name to URL-friendly slug
function toSlug(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Get the person ID from URL params
const urlParams = new URLSearchParams(window.location.search);
const personId = urlParams.get('id');
const personType = urlParams.get('type') || 'coach'; // coach, athlete, or board

// Find the person in the appropriate array
function findPerson(id, type) {
  let people, typeLabel, backLink;
  
  switch(type) {
    case 'athlete':
      people = athletes;
      typeLabel = 'Athlete';
      backLink = 'about.html#athletes';
      break;
    case 'board':
      people = boardMembers;
      typeLabel = 'Board Member';
      backLink = 'about.html#board';
      break;
    case 'coach':
    default:
      people = coaches;
      typeLabel = 'Coach';
      backLink = 'about.html#coaches';
  }
  
  const person = people.find(p => toSlug(p.name) === id);
  
  return { person, typeLabel, backLink };
}

// Render the bio page
function renderBio() {
  const container = document.getElementById('bioContainer');
  
  if (!personId) {
    renderNotFound(container, 'No person specified');
    return;
  }
  
  const { person, typeLabel, backLink } = findPerson(personId, personType);
  
  if (!person) {
    renderNotFound(container, 'Person not found');
    return;
  }
  
  // Update page title
  document.title = `${person.name} | Saskatoon Water Ski Club`;
  
  // Determine role/title based on person type
  const roleText = person.role || person.title || '';
  const bioText = person.bio || 'Bio coming soon.';
  
  // Check if image is emoji or URL
  const isEmoji = person.image && person.image.length <= 4;
  const imageContent = isEmoji 
    ? person.image 
    : `<img src="${person.image}" alt="${person.name}">`;
  
  container.innerHTML = `
    <a href="${backLink}" class="bio-back-link">
      ← Back to ${typeLabel}s
    </a>
    
    <div class="bio-header">
      <div class="bio-image">
        ${imageContent}
      </div>
      <div class="bio-info">
        <span class="bio-type">${typeLabel}</span>
        <h1>${person.name}</h1>
        ${roleText ? `<span class="bio-role">${roleText}</span>` : ''}
        <div class="bio-content">
          <p>${bioText}</p>
        </div>
      </div>
    </div>
  `;
}

// Render not found state
function renderNotFound(container, message) {
  container.innerHTML = `
    <div class="bio-not-found">
      <h1>NOT FOUND</h1>
      <p>${message}</p>
      <a href="about.html" class="btn-primary">Back to About</a>
    </div>
  `;
}

// Run on page load
renderBio();
