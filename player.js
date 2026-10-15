// Всё про игрока: его данные и как его рисовать

// Игрок: где стоит, какого размера и цвета
const player = {
  x: PLAYER_START_X,
  y: PLAYER_START_Y,
  size: PLAYER_SIZE,
  color: PLAYER_COLOR,
};

// Рисует игрока квадратом
function drawPlayer() {
  context.fillStyle = player.color;
  context.fillRect(player.x, player.y, player.size, player.size);
}