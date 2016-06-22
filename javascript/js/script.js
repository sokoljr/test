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

// возведение в степень
var number = prompt("введите число","");
var power = prompt("введите степень","");

function toPower(number,power) {
  if(power === 0) {
    return 1;
  }else {
    return toPower(number, power - 1) * number;
  }
}

alert(toPower(number,power));


//Создать массив и заполнить его десятью значениями в пределах -100...100 при помощи Math.random. Возвести каждый элемент массива в квадрат и вернуть массив, который будет содержать элементы > 100;
 generation = function(max,min) { // Функция генерации чисел
  max = 100;
  min = -100
 return Math.floor(Math.random() * (max - min)) + min;
};

arr = [] // создаем массив в котором генерируются 10 значений
inArr = function(val) {
 for(var i=0; i<=arr.length; i++) {
   if(arr[i] === val) 
     return true;
 }
};

while(arr.length<10) { // Массив состоит из 10 значений
 tmp = generation()
if(inArr(tmp)) continue; 
 arr.push(tmp)
}
console.log(arr);

arr2 = [] // создаем массив в который будут возращатся возведенные в квадрат значения >100 
var length = arr.length;
var num;
for(var i = 0; i < length; i++) {
 num = arr[i];
 num = num*num;
  if (num > 100) {
    arr2.push(num);
  }
}
console.log(arr2);

//Написать функцию, которая будет сравнивать два объекта Date и сообщать, какая дата была раньше или если они равны.
var date1=new Date(),
    date2=new Date(2016,6,15);
compare(date2,date1)

function compare(date1,date2) {
  if(date1.getTime() >date2.getTime()) {
    alert ("Первая дата позже второй");
  }
  else if (date1.getTime() == date2.getTime()) {
    alert("Одновременно");
  }
  else {
    alert("вторая дата позже первой");
  }
}

// Показывает позицию буквы в строке.
var text = "Значимость этих проблем настолько очевидна, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании форм развития. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации систем массового участия. Равным образом укрепление и развитие структуры играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям."

var target = "а";
var pos = -1;
while ((pos = text.indexOf(target, pos + 1)) != -1) {
  alert(pos);
}

// Посчитать количество гласных в строке.
var text = "Значимость этих проблем настолько очевидна, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании форм развития. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации систем массового участия. Равным образом укрепление и развитие структуры играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям."
var len = text.match(/[аоэиуыеёюя]/igm).length - 1;
alert(len);

// Посчитать количество гласных в строке.

var str = "Значимость этих проблем настолько очевидна, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании форм развития. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации систем массового участия. Равным образом укрепление и развитие структуры играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям."
alert(counter(str));

function counter(str) {
  var vovels = ["а","е","ё","и","о","у","ы","э","ю","я"]
  var count = 0;
  for(var i=0; i < str.length; i++) {
    var symbol = str[i].toLowerCase();
    if(vovels.indexOf(str[i]) > -1) 
      count++;
  }
  return count;
}

// свойство this

var obj = {  // объект со свойствами
  make: "ford",
  model: "Escort",
  engine: 2000,
  price: 5000,
  speed: 0,
  toString: function() { // выводим наименования на страницу
    return this.make + " " + this.model;
  },
  valueOf: function() { // выводим цену с пошлиной в алерте
    return this.price;
  },
  run: function() {
    this.speed = 60;
  }
}
alert(obj.speed);
obj.run();
alert(obj.speed);


// Задача: есть массив объектов (создать вручную, не меньше 4-х объектов, из них должно быть несколько объектов с равными значениями свойства height). Объект описывает человека, есть ключи name, surname, weight, height. Отсортировать "людей" в массиве по росту. Если рост одинаковый - то по фамилии. Использовать метод sort для массивов

var person1 = {name: "Sergey", surname: "Sokol", weight: 95, height: 190},
person2 = {name: "John", surname: "Huge", weight: 90, height: 190},
person3 = {name: "Max", surname: "Kill", weight: 87, height: 167},
person4 = {name: "Mikel", surname: "Rodzinskii", weight: 78, height: 175},
person5 = {name: "Maria", surname: "Luna", weight: 32, height: 190},
person6 = {name: "Alice", surname: "Bora", weight: 45, height: 132},
person7 = {name: "Maya", surname: "Cari", weight: 78, height: 112};

var array = [person1, person2, person3, person4, person5, person6, person7];

function compare(a, b) {
  if(a.height == b.height) {
    return a.surname > b.surname;
  } else {
    return a.height - b.height;
    }
}

array.sort(compare);

for(var i = 0; i < array.length; i++) {
  alert(array[i].height); 
}

console.log(array);

// Задача: есть массив объектов (создать вручную, не меньше 4-х объектов, из них должно быть несколько объектов с равными значениями свойства height). Объект описывает человека, есть ключи name, surname, weight, height. Отсортировать "людей" в массиве по росту. Если рост одинаковый - то по фамилии. Использовать метод sort для массивов

var person1 = {name: "Sergey", surname: "Sokol", weight: 95, height: 190},
person2 = {name: "John", surname: "Huge", weight: 90, height: 190},
person3 = {name: "Max", surname: "Kill", weight: 87, height: 167},
person4 = {name: "Mikel", surname: "Rodzinskii", weight: 78, height: 175},
person5 = {name: "Maria", surname: "Luna", weight: 32, height: 190},
person6 = {name: "Alice", surname: "Bora", weight: 45, height: 132},
person7 = {name: "Maya", surname: "Cari", weight: 78, height: 112};

var array = [person1, person2, person3, person4, person5, person6, person7];

function compare(a, b) {
  if(a.height !== b.height) 
    return a.height - b.height;
var surnameA = a.surname.toLowerCase();
var surnameB = b.surname.toLowerCase();
  if (surnameA > surnameB) 
    return 1;
else if (surnameA < surnameB)
	return -1;
else
	return 0;
}

array.sort(compare);

console.log(array);

// Счет чисел от 1 до n
var sum = 0;
for (j = 1; j <= 10; j=j+1) {
  sum = sum + j;
}
console.log(sum);

// 3 способа обработки событий
// 1-й

