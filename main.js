function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon=${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon=${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>    
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "DOM", createGame("Qatar", "13:00", "Ecuador")) +
  createCard(
    "21/11",
    "SEG",
    createGame("England", "10:00", "Iran") +
      createGame("United States", "16:00", "Wales") +
      createGame("Senegal", "13:00", "Netherlands")
  ) +
  createCard(
    "22/11",
    "TER",
    createGame("Argentina", "07:00", "Saudi Arabia") +
      createGame("Mexico", "13:00", "Poland") +
      createGame("Denmark", "10:00", "Tunisia") +
      createGame("France", "16:00", "Australia")
  )
