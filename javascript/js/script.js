/**
 * Created by Home on 06.06.2016.
 */

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