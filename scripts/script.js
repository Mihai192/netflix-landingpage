const inputs       = [...document.querySelectorAll('.input-form-wrapper > input')];
const placeHolders = [...document.querySelectorAll('.place-holder')];
const video1       = document.querySelector('.video-1');
const video2       = document.querySelector('.video-2');
const questions    = [...document.querySelectorAll('.question')];

function validateEmail(email) 
{
    let re = /^\S+@\S+\.\S+$/;
    return re.test(email);
}

inputs.forEach((input) => {
	input.addEventListener('focus', () => {
		input.nextElementSibling.classList.add('focus');
	});

	input.addEventListener('focusout', () => {
		if (input.value == '')
			input.nextElementSibling.classList.remove('focus');
	});

	input.addEventListener('input', () => {
		if (/^\S+@\S+\.\S+$/.test(input.value))
			input.nextElementSibling.nextElementSibling.innerHTML = ""; 
		else if (input.value.length < 4)
			input.nextElementSibling.nextElementSibling.innerHTML = "Email is required"; 
		else 
			input.nextElementSibling.nextElementSibling.innerHTML = "Please enter a valid email address";
	});
});

placeHolders.forEach((placeHolder) => {
	placeHolder.addEventListener('click', () => {
		placeHolder.previousElementSibling.focus();
		placeHolder.classList.add('focus');
	});
});

questions.forEach((question) => {
	question.addEventListener('click', () => {
		question.nextElementSibling.classList.toggle('active-answer');
		question.querySelector('span').classList.toggle('rotate');
	});
});

