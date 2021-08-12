const form = document.querySelector('#form');
const input = document.querySelector('#name');
const ol = document.querySelector('#ol');
const buttons = document.querySelectorAll('li button');


ol.addEventListener('click', function(e) {
	if (e.target.tagName === 'BUTTON') {
		e.target.parentElement.remove();
	}
	else if (e.target.tagName === 'LI') {
		e.target.style.textDecoration ='line-through';	
	
	}
});


form.addEventListener('submit', function(e) {
	e.preventDefault();
	const li = document.createElement('li');
    const btn = document.createElement('button');
	btn.innerText = 'Delete';

    btn.addEventListener('click', function(e) {
		e.target.parentElement.remove();
	});

	li.innerText = input.value;
	li.appendChild(btn);
	ol.appendChild(li);
	input.value = '';
});



