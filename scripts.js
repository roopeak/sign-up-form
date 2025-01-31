const userPassword = document.getElementById('user-password');
const confirmUserPassword = document.getElementById('confirm-password');

userPassword.addEventListener('', () => {
    if (userPassword.value != confirmUserPassword.value) {
			userPassword.style.border = '1px solid red';
			confirmUserPassword.style.border = '1px solid red';
    }
});

confirmUserPassword.addEventListener('input', () => {
	if (userPassword.value === confirmUserPassword.value) {
		userPassword.style.border = '1px solid grey';
		confirmUserPassword.style.border = '1px solid grey';
	}
});