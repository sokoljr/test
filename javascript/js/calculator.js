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