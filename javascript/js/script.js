/**
 * Created by Home on 06.06.2016.
 */
alert( 'Я – JavaScript!' );

/** Задача про простые числа от 1 до 10*/
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



/** пример функции*/
function toPower(number, power) {   
	var result = 1;
	for (i=0; i < power; i++)
		result = result * number;
	return result;
}

var result = toPower(2, 2);
alert(result);
