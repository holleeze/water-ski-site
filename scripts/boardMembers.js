import { boardMembers } from "../data/data.js";

const grid = document.getElementById("boardGrid");

boardMembers.forEach(board => {
  const card = document.createElement("div");
  card.className = "team-card";

  card.innerHTML = `
    <div class="team-card-image">${board.image}</div>
    <div class="team-card-content">
      <h3>${board.name}</h3>
      <p class="role">${board.title}</p>
      <p>${board.occupation}</p>
    </div>
  `;

  grid.appendChild(card);
});
