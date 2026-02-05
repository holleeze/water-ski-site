import { coaches } from "./data.js";

const grid = document.getElementById("coachGrid");

coaches.forEach(coach => {
  const card = document.createElement("div");
  card.className = "team-card";

  card.innerHTML = `
    <div class="team-card-image">${coach.image}</div>
    <div class="team-card-content">
      <h3>${coach.name}</h3>
      <p class="role">${coach.role}</p>
      <p>${coach.bio}</p>
    </div>
  `;

  grid.appendChild(card);
});
