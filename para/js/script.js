//1.установка обработчика
//2-ой способ
var buttons = document.getElementsByTagName("button"); // Ищем элементы кнопок
buttons[1].onclick = function(e) {
  alert("From function");
}
buttons[1].onclick = function(e) {
  alert("From function 2");
}

//3-й способ
buttons[2].addEventListener('click', btnClick);
buttons[2].addEventListener('click', btnClick2);
function btnClick(e) {
  e.stopImmediatePropagation(); // остановит после первого события и не подкрасит кнопку, так как стоит  e.stopImmediatePropagation(); срабатывает только первый обработчик.
  alert("From addEventListener 3");
}
function btnClick2(e) { 
  e.stopPropagation(); // остановит и не подкрасит кнопку, так как стоит  e.stopPropagation();
  alert("From addEventListener 3.2"); 
}

//обнуление обработчика событий
buttons[3].onclick = function() {
  buttons[1].onclick = null;
  buttons[2].removeEventListener('click', btnClick);
}


//2.Всплытие событий

var buttons_wrapper = document.querySelector(".buttons_wrapper");
var section_one = buttons_wrapper.parentElement;

buttons_wrapper.addEventListener("click", eventLog);
section_one.addEventListener("click", eventLog);

function eventLog(e) {
  console.log("Тип события " + e.type + " текущий элемент " + e.currentTarget.tagName + " цель события: " + e.target.tagName);
  e.target.style.backgroundColor = "red"; // подсветка событий
}

// e.stopPropagation(); - остановка всплытия
// e.stopImmediatePropagation(); - мнгновенная остановка события
// e.preventDefault(); - функция отменяет действие по умолчанию браузера

// 3. preventDefault
//1
document.querySelector('a[href*="google"]').onclick = function(e) {
  e.preventDefault();
};

//2
document.querySelector("a[href*="google"]").onclick = function(e) {
  return false;
};

//4. Другие события

// Мышинные события

// ЛКМ
// mousedown - когда нажали
// mouseup - когда отпустили мышь
//click
//mousedown
//mouseup
//click
//dblclick

// ПКМ
//mousedown
//mouseup
//contextmenu

//mouse
//mousemove
//mouseover
//mouseout

//мышь
mouse_test.addEventListener("mouseover", mouseLog);

var mouse_run = document.querySelector(".mouse_run");
mouse_run.addEventListener("mousemove", mouseLog);

function mouseLog(e) {
  console.log("Событие: " + e.type + " координаты");
}

//клавиатура
//keydown
//keyup
//keypress - e.charCode(клавиатура раскладка язык); e.keyCode(какая кнопка только); e.shiftKey, e.altKey, e.ctrlKey;
document.addEventListener("keydown", keyLog);
document.addEventListener("keyup", keyLog);
document.addEventListener("keypress", keyLog);

function keyLog(e) {
  console.log("Событие: " + e.type + " код клавиши: " + e.keyCode + (e.charCode? " символ: " + String.fromCharCode(e.charCode) : ""));
}

//Формы события
//Submit
//input change






