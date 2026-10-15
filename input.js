// Всё про клавиатуру: какие клавиши сейчас зажаты

// Список зажатых клавиш, например: { KeyW: true, ArrowLeft: false }
const pressedKeys = {};

// Вызывается, когда клавишу нажали: запоминаем, что она зажата
function handleKeyDown(event) {
  pressedKeys[event.code] = true;
}

// Вызывается, когда клавишу отпустили: запоминаем, что она больше не зажата
function handleKeyUp(event) {
  pressedKeys[event.code] = false;
}

// Отвечает, зажата ли клавиша прямо сейчас: true (да) или false (нет)
function isKeyPressed(code) {
  return pressedKeys[code] === true;
}

// Просим браузер сообщать нам о нажатиях и отпусканиях клавиш
window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);