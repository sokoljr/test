function sum() {

	var buttons = document.getElementsByTagName('button');
	var div = document.querySelector('div');
	
	for (i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function() {
			div.textContent = +this.textContent + +div.textContent; });
		};
}

sum();



		

















