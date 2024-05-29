let playerList = [];

const input = document.getElementById("playerName");

// Adiciona um ouvinte de evento de teclado ao campo de entrada
input.addEventListener("keyup", function(event) {
  // Verifica se a tecla pressionada é "Enter" (código 13)
  if (event.keyCode === 13) {
    // Chama a função addPlayer() quando a tecla "Enter" é pressionada
    addPlayer();
  }
});

function addPlayer() {
  const input = document.getElementById("playerName");
  const playerName = input.value.trim();
  if (playerName !== "") {
    playerList.push(playerName);
    displayPlayers();
    input.value = ""; // Limpa o campo de entrada
    input.focus(); // Define o foco de volta para o campo de entrada
  } else {
    alert("Por favor, insira um nome válido.");
  }
}


function displayPlayers() {
  const playerContainer = document.getElementById("players");
  playerContainer.innerHTML = "";

  const radius = 100; // Raio do círculo
  const angleIncrement = (2 * Math.PI) / playerList.length; // Incremento do ângulo para cada jogador

  playerList.forEach((player, index) => {
    const angle = angleIncrement * index;
    const x = Math.cos(angle) * radius + 100; // Adiciona 100px para centralizar horizontalmente
    const y = Math.sin(angle) * radius + 100; // Adiciona 100px para centralizar verticalmente

    const li = document.createElement("li");
    li.textContent = player;
    li.style.left = x + "px";
    li.style.top = y + "px";
    playerContainer.appendChild(li);
  });
}

function spinBottle() {
  if (playerList.length === 0) {
    alert("Por favor, adicione pelo menos 4 jogadores.");
    return;
  }

  if(playerList.length < 4){
    alert("Por favor, adicione pelo menos 4 jogadores.");
    return;
  }
  
  if (playerList.length % 2 !== 0) {
    alert("Por favor, adicione um número par de jogadores para girar a garrafa.");
    return;
  }
  
  const randomIndex = Math.floor(Math.random() * playerList.length);
  const selectedPlayer = playerList[randomIndex];

  rotateBottle();
}


function rotateBottle() {
  const bottle = document.querySelector(".bottle");
  const rotation = Math.floor(Math.random() * 360) + 360 * 3; // Rotacionar entre 3 e 4 voltas completas
  bottle.style.transition = "transform 3s ease-out";
  bottle.style.transform = `rotate(${rotation}deg)`;
}
