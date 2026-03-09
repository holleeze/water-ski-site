// scripts/sponsors.js
import { sponsors } from '../data/data.js';

const grid = document.getElementById('sponsorsGrid');

if (grid) {
  sponsors.forEach(sponsor => {
    const item = document.createElement('a');
    item.className = 'sponsor-item';
    item.href = sponsor.url;
    item.target = '_blank';
    item.rel = 'noopener noreferrer';
    item.title = sponsor.name;

    item.innerHTML = `
      <img src="${sponsor.logoImg}" alt="${sponsor.name}">
    `;

    grid.appendChild(item);
  });

  console.log(`Loaded ${sponsors.length} sponsor(s)`);
}
