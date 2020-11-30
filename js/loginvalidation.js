const loginform = document.getElementById('loginform');

loginform.addEventListener('submit', n => {
    n.preventDefault();
    loginInputs();
});

function loginInputs() {
	const emailValue = document.getElementById('email').value;
	const passwordValue = document.getElementById('password').value;
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	//if(passwordValue === '') {
	//	setErrorFor(password, 'Password cannot be blank');
	//} else {
	//	setSuccessFor(password);
	//}
}
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
const visToggle = document.querySelector('.eyeIcon');

const input = document.querySelector('#pwdWrap input');

var password = true;

visToggle.addEventListener('click', function () {
    if (password) {
        input.setAttribute('type', 'text'); // using js dynamically changed the type attribute
        visToggle.classList.remove('fa-eye');
        visToggle.classList.add('fa-eye-slash');
    } else {
        input.setAttribute('type', 'password');
        visToggle.classList.remove('fa-eye-slash');
        visToggle.classList.add('fa-eye');
    }
    password = !password;
});