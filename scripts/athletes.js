import { athletes } from "./data.js";

const grid = document.getElementById("athleteGrid");

athletes.forEach(athlete => {
  const card = document.createElement("div");
  card.className = "team-card";

  card.innerHTML = `
    <div class="team-card-image">${athlete.image}</div>
    <div class="team-card-content">
      <h3>${athlete.name}</h3>
      <p class="role">Team Athlete</p>
      <p>${athlete.bioLink}</p>
    </div>
  `;

  grid.appendChild(card);
});
