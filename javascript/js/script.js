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

var x = prompt('Введите первое число', '');
var z = prompt('введите знак - сложение,вычитание,умножение или деление', '');
var y = prompt('Введите второе число', '');
var r;
x = parseFloat(x);
y = parseFloat(y);

function calc(r) {
   if (isNaN(x)) {
     alert( "Некорректно введено первое число" );
     return null;
   };
   if (z !== "+" && z !== "-" && z !== "*" && z !== "/") {
     alert("Некорректно введен знак"); 
     return null;
   };
   if (isNaN(y)) {
     alert( "Некорректно введено второе число" );
     return null;
   };
   if (z === '+') {
      return (+x) + (+y);
   } else if (z === '-') {
      return  x - y;
   } else if (z === '*') {
      return  x * y;
   } else if (y == 0) {
      alert("На ноль делить нельзя");
      return null;
   } else {
      return x / y; 
   }
}
var result = calc(r);
if (result !== null)
  alert(result);


// Задача калькулятор

var x,y;
x = userInput('Введите первое число');
var z = prompt('введите знак - сложение,вычитание,умножение или деление', '');
y = userInput('Введите второе число');
alert(calc(x,y,z));

function userInput(name) {
	var number;
	do {
		number = (prompt("Enter " + name + " number"));
		number = (checkNumber(number);
	}while(number===false);
	return number;
}

function checkNumber(number) {
	if (isNaN(number) && number==="")
		return false;
	return parseFloat(number);
}

function calc(x,y,z) {
switch(z) {
    case "+" : return x + y;
    case "-" : return x - y;
    case "*" : return x * y;
	case "/" : if (y === 0)
			return "Деление на ноль запрещено!";
		return x / y;
	default: return "Z " + z + " is not supported";
   }
}


// цельсий в фаренгейт
var celc = prompt ("Введите значение", "");

function convertFahr (celc) {
  return 1.8 * celc + 32;
}
alert(convertFahr (celc));



// уникальность
var string = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";

function findUnique(string) {
  alert(string.length); 
  for(var i = 0; i < string.length; i++) {
    var letter = string [i];
    var nextIndex = string.indexOf (letter, i++);
    if(nextIndex === -1) {
      alert(letter);
      break;
    }
  }
}


//диапазон чисел

var min = prompt ("Введите минимальное число", "");
var max = prompt ("Введите максимальное число", "");

//primer

var obj = {
  name: "John",
  height: 185,
  weight: 75,
  age: 27,
  toString: function() {
    var str = "";
    for (var key in this) {
      if (key!== "toString")
      str += key + ": " + this[key] + " ";
    }
    return str;
  }
  
}

var obj2 = {
  name: "Max",
  height: 185,
  weight: 75,
  age: 27,
  toString: function() {
    var str = "";
    for (var key in this) {
      if (key!== "toString")
      str += key + ": " + this[key] + " ";
    }
    return str;
  }
}

alert(obj + obj2);

// setTimeout
var counter = setTimeout(function() {
  alert("after timeout");
}, 3000);


// setInterval
var counter = setInterval(function() {
  alert("after timeout");
}, 3000);

// setTimeout
var a = 10;

setTimeout(function() {
  alert(a);
},1000);

a=5; // выведет 5
