// Всё про игрока: его данные и как его рисовать

// Игрок: где стоит, какого размера и цвета
const player = {
  x: PLAYER_START_X,
  y: PLAYER_START_Y,
  size: PLAYER_SIZE,
  color: PLAYER_COLOR,
  speed: PLAYER_SPEED,
};

// Рисует игрока квадратом
function drawPlayer() {
  context.fillStyle = player.color;
  context.fillRect(player.x, player.y, player.size, player.size);
}


// Двигает игрока, если зажаты клавиши направлений (стрелки или WASD)
function updatePlayer() {
  // Вверх: y уменьшается, потому что на холсте y растёт вниз
  if (isKeyPressed("KeyW") || isKeyPressed("ArrowUp")) {
    player.y = player.y - player.speed;
  }

  // Вниз: y увеличивается
  if (isKeyPressed("KeyS") || isKeyPressed("ArrowDown")) {
    player.y = player.y + player.speed;
  }

  // Влево: x уменьшается
  if (isKeyPressed("KeyA") || isKeyPressed("ArrowLeft")) {
    player.x = player.x - player.speed;
  }

  // Вправо: x увеличивается
  if (isKeyPressed("KeyD") || isKeyPressed("ArrowRight")) {
    player.x = player.x + player.speed;
  }
}