// Все настройки игры (числа, цвета, размеры) лежат здесь,
// чтобы их было легко найти и поменять.

// Цвет, которым заливается холст (пока просто фон)
const BACKGROUND_COLOR = "#5ab1f0";

// Надпись для отладки (счётчик кадров и FPS в углу экрана)
const DEBUG_TEXT_COLOR = "#000000";
const DEBUG_TEXT_FONT = "30px sans-serif";
const DEBUG_TEXT_X = 20;
const DEBUG_TEXT_Y = 45;
const DEBUG_TEXT_LINE_HEIGHT = 50;

// Игрок
const PLAYER_SIZE = 50;           // сторона квадрата в точках
const PLAYER_COLOR = "#1d1d1b"; // серый
const PLAYER_START_X = 300;       // где игрок появляется (левый верхний угол квадрата)
const PLAYER_START_Y = 500;       
const PLAYER_SPEED = 300;         // на сколько точек игрок сдвигается за одну СЕКУНДУ

// Игровой цикл
const MAX_DELTA_TIME = 0.1;       // самый большой шаг времени за кадр (в секундах), защита от прыжков