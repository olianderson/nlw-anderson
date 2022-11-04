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
  createCard("20/11", "DOM", createGame("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "SEG",
    createGame("england", "10:00", "iran") +
      createGame("united states", "16:00", "wales") +
      createGame("senegal", "13:00", "netherlands")
  ) +
  createCard(
    "22/11",
    "TER",
    createGame("argentina", "07:00", "saudi arabia") +
      createGame("mexico", "13:00", "poland") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("france", "16:00", "australia")
  )
