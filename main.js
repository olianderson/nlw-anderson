function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon=${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon=${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>    
  `
}

document.querySelector("#app").innerHTML = `
  <header>
    <img align="center" src="./assets/logo.svg" alt="Logo da NLW" />
  </header>
  <main id="cards">
    ${createCard(
      "21/11",
      "quinta",
      createGame("England", "10:00", "Iran") +
        createGame("United States", "16:00", "Wales") +
        createGame("Senegal", "13:00", "Netherlands")
    )}
  </main>
`
