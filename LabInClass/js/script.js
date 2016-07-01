/*function sum() {

	var buttons = document.getElementsByTagName('button');
	var div = document.querySelector('div');
	
	for (i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function() {
			div.textContent = +this.textContent + +div.textContent; });
		};
}
sum();*/

function sum() {

	var buttons = document.getElementsByClassName('buttons');
	var result = document.getElementById('result');

	buttons[0].addEventListener('click', function(e) {
		if (e.target.tagName !== "BUTTON") 
			return;
			result.textContent = +e.target.textContent + +result.textContent; 
	});
}
sum();



		

















