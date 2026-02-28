// scripts/bio.js
import { coaches, athletes, boardMembers } from "../data/data.js";

/**
 * Calculate age from date of birth string
 * @param {string} dobString - Date in format like "September 2nd, 2002" or "2002-09-02"
 * @returns {number|null} Age in years, or null if parsing fails
 */
function calculateAge(dobString) {
  // Remove ordinal suffixes (1st, 2nd, 3rd, 4th, etc.)
  const cleanDate = dobString.replace(/(\d+)(st|nd|rd|th)/g, '$1');
  const dob = new Date(cleanDate);

  if (isNaN(dob.getTime())) {
    console.warn(`Could not parse date: ${dobString}`);
    return null;
  }

  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  // Subtract 1 if birthday hasn't occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  return age;
}

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

// Get the person ID from URL params
const urlParams = new URLSearchParams(window.location.search);
const personId = urlParams.get('id');
const personType = urlParams.get('type') || 'coach'; // coach, athlete, or board

/**
 * Find the person in the appropriate array
 */
function findPerson(id, type) {
  let people, typeLabel, backLink;

  switch (type) {
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

/**
 * Render the bio page
 */
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

  // Check if image is emoji or URL
  const isEmoji = person.image && person.image.length <= 4;
  const imageContent = isEmoji
    ? person.image
    : `<img src="${person.image}" alt="${person.name}">`;

  // Build uniform details section (for athletes only)
  let detailsHTML = '';
  if (personType === 'athlete' && person.details) {
    const d = person.details;

    // Calculate age if dateOfBirth exists
    const age = d.dateOfBirth ? calculateAge(d.dateOfBirth) : null;

    detailsHTML = `
      <div class="athlete-details">
        ${d.dateOfBirth ? `<p><strong>Date of Birth:</strong> ${d.dateOfBirth}</p>` : ''}
        ${age ? `<p><strong>Age:</strong> ${age}</p>` : ''}
        ${d.division ? `<p><strong>Division:</strong> ${d.division}</p>` : ''}
        ${d.wwsBio ? `<p><a href="${d.wwsBio}" target="_blank">World Water Skiers Bio</a></p>` : ''}
        ${d.instagram ? `<p><strong>Instagram:</strong> ${d.instagram}</p>` : ''}
        ${d.photoCredit ? `<p><em>Photo courtesy of: ${d.photoCredit}</em></p>` : ''}
      </div>
    `;
  }

  // Get bio content - use bioHTML if available, fallback to bio
  const bioContent = person.bioHTML || (person.bio ? `<p>${person.bio}</p>` : '<p>Bio coming soon.</p>');

  const roleText = person.role || person.title || '';

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
        ${detailsHTML}
      </div>
    </div>
    
    <div class="bio-content">
      ${bioContent}
    </div>
  `;

  // Build gallery section if images exist
  let galleryHTML = '';
  if (person.galleryImages && person.galleryImages.length > 0) {
    const galleryItems = person.galleryImages.map(img => `
      <div class="bio-gallery-item">
        <img src="${img.src}" alt="${person.name} action photo">
      </div>
    `).join('');

    galleryHTML = `
      <div class="bio-gallery">
        ${galleryItems}
      </div>
    `;
  }

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
        ${detailsHTML}
      </div>
    </div>
    
    <div class="bio-content">
      ${bioContent}
    </div>
    
    ${galleryHTML}
  `;
}

/**
 * Render not found state
 */
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
