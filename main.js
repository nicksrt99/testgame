// Находим холст на странице и берём у него «кисточку» (context) для рисования
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// Подгоняет размер холста под размер окна и заливает его фоновым цветом.
// Без этого внутри холста было бы всего 300×150 точек, и картинка была бы мутной.
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  context.fillStyle = BACKGROUND_COLOR;
  context.fillRect(0, 0, canvas.width, canvas.height);
}

// Вызываем один раз при загрузке страницы
resizeCanvas();

// И каждый раз, когда окно меняет размер (например, поворот iPad)
window.addEventListener("resize", resizeCanvas);
