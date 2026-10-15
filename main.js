// Находим холст на странице и берём у него «кисточку» (context) для рисования
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// Сколько кадров нарисовано с момента запуска (временно, для проверки цикла)
let frameCount = 0;

// Для подсчёта FPS (кадров в секунду)
let fps = 0;              // число, которое показываем на экране
let framesThisSecond = 0; // сколько кадров набралось в текущей секунде
let lastFpsTime = 0;      // время (в мс), когда началась текущая секунда

// Подгоняет размер холста под размер окна.
// Без этого внутри холста было бы всего 300×150 точек, и картинка была бы мутной.
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Обновляет состояние игры: здесь всё, что меняется со временем
function update(currentTime) {
  frameCount = frameCount + 1;
  framesThisSecond = framesThisSecond + 1;
  
  // Если с начала текущей секунды прошло 1000 мс (то есть 1 секунда)...
  if (currentTime - lastFpsTime >= 1000) {
    fps = framesThisSecond;     // ...запоминаем, сколько кадров набралось
    framesThisSecond = 0;       // начинаем считать заново
    lastFpsTime = currentTime;  // новая секунда началась сейчас
  }
}

// Рисует всю картинку заново
function draw() {
  // Заливаем фон — это заодно стирает всё, что было нарисовано в прошлом кадре
  context.fillStyle = BACKGROUND_COLOR;
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Пишем номер кадра в углу
  context.fillStyle = DEBUG_TEXT_COLOR;
  context.font = DEBUG_TEXT_FONT;
  context.fillText("Кадр: " + frameCount, DEBUG_TEXT_X, DEBUG_TEXT_Y);
  context.fillText("FPS: " + fps, DEBUG_TEXT_X, DEBUG_TEXT_Y + DEBUG_TEXT_LINE_HEIGHT);
}

// Игровой цикл: обновить → нарисовать → попросить браузер повторить
function gameLoop(currentTime) {
  update(currentTime);
  draw();
  requestAnimationFrame(gameLoop);
}

// Подгоняем размер при загрузке и при каждом изменении окна
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Запускаем игровой цикл
requestAnimationFrame(gameLoop);