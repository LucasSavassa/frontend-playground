const switchElem = document.querySelector('.toggle #switch');
const labelElem = document.querySelector('.toggle label');

switchElem.addEventListener('click', toggle);

function toggle() {
	const checked = switchElem.getAttribute('checked') === '';
	
	if(checked){
		switchElem.removeAttribute('checked');
		labelElem.textContent = 'Quantidade';
	}
	else {
		switchElem.setAttribute('checked', '');
		labelElem.textContent = 'Peso';
	}
}