// цельсий в фаренгейт
var celc = prompt ("Введите значение", "");

function convertFahr (celc) {
  return 1.8 * celc + 32;
}
alert(convertFahr (celc));