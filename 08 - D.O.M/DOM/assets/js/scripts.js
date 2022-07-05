function changeMode(){
	changeClasses();
	changeText();
}

function changeClasses() {
button.classList.toggle(darkM);
h1.classList.toggle(darkM);
body.classList.toggle(darkM);
footer.classList.toggle(darkM);
}

function changeText(){
	if(body.classList.contains(darkM)){
		button.innerHTML = "Light Mode";
		h1.innerHTML = "Dark mode ON";
		return;
	}
		button.innerHTML = 'Dark Mode';
		h1.innerHTML = "Light Mode ON";

}


const darkM = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode)