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


// Двигает игрока, если зажаты клавиши направлений (стрелки или WASD).
// deltaTime — сколько секунд прошло с прошлого кадра: шаг = скорость × время
function updatePlayer(deltaTime) {
  // Направление движения: -1, 0 или 1 по каждой оси
  let moveX = 0; // -1 влево, 1 вправо, 0 на месте
  let moveY = 0; // -1 вверх, 1 вниз, 0 на месте

  // Вверх: y уменьшается, потому что на холсте y растёт вниз
  if (isKeyPressed("KeyW") || isKeyPressed("ArrowUp")) {
    moveY = moveY - 1;
  }

  // Вниз: y увеличивается
  if (isKeyPressed("KeyS") || isKeyPressed("ArrowDown")) {
    moveY = moveY + 1;
  }

  // Влево: x уменьшается
  if (isKeyPressed("KeyA") || isKeyPressed("ArrowLeft")) {
    moveX = moveX - 1;
  }

  // Вправо: x увеличивается
  if (isKeyPressed("KeyD") || isKeyPressed("ArrowRight")) {
    moveX = moveX + 1;
  }

  // По диагонали (двигаемся И по X, И по Y) укорачиваем шаг по каждой оси,
  // иначе по диагонали получится в √2 ≈ 1.41 раза быстрее
  if (moveX !== 0 && moveY !== 0) {
    moveX = moveX / Math.sqrt(2);
    moveY = moveY / Math.sqrt(2);
  }

  // Двигаем игрока: направление × скорость × время
  player.x = player.x + moveX * player.speed * deltaTime;
  player.y = player.y + moveY * player.speed * deltaTime;
}