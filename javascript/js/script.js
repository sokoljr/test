 var userName=prompt('Кто пришел?','');
if (userName=='Админ') {
    var pass=prompt('Пароль','');
    if (pass=='привет') {
        alert('Добро пожаловать');
    } else if (pass==null) {
        alert('Вход отменен');
    } else {
        alert("пароль не верный");
    }
} else if (userName==null) {
    alert('Вход отменен');
} else {
    alert('Я Вас не знаю');
}


// Задача про простые числа от 1 до 10
var min = 1;
var max = 10;

if (min === 1) {
  alert(min);
  min++;
}

for (var i = min; i <= max; i++) {
  var simple = true;
  for (var j = min; j < i; j++) {
    if (i % j === 0) {
      simple = false;
      break;
    }
  }
  if (simple)
    alert (i);
} 



// пример функции
function toPower(number, power) {   
	var result = 1;
	for (i=0; i < power; i++)
		result = result * number;
	return result;
}

var result = toPower(2, 2);
alert(result);




// Задача калькулятор

var x = prompt('Введите число?', '');
var y = prompt('Введите второе число?', '');
var z = prompt('введите + ; введите - ; введите * ; введите / ', '');
var result;

function calc () {
    if (z == '+') {
        result = (+x) + (+y);
    }
    else if (z == '-') {
        result = x - y;
    }
    else if (z == '*') {
        result = x * y;
    }
    else if (z == '/') {
        result = x / y;
    }
}
alert(result);




// Задача калькулятор

var x = prompt('Введите число', '');
var z = prompt('введите знак - сложение,вычитание,умножение или деление', '');
var y = prompt('Введите второе число', '');
var result;

switch(z)
{
    case "+" : result = (+x) + (+y);
        break;
    case "-" : result = x - y;
        break;
    case "*" : result = x * y;
        break;
    case "/" : result = x / y
}
alert(result);





 // цельсий в фаренгейт
 var c = prompt ('введите значение','');
 var f;
 if (c > 0) {
     f = c * 1.8 + 32;
 }
 alert(f);

