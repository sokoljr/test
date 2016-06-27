window.addEventListener('DOMContentLoaded', init);

function init() {

	var buttons = document.getElementsByTagName('button');
	var div = document.querySelector('div');
	var i;

	for (i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function() {
			div.innerText = +this.innerText + +div.innerText; });
		};
}



		

















