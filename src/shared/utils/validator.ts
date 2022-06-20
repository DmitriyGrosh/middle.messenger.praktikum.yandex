export const isEmptyValidator = (value: string) => {
	if (!value) {
		return 'Это поле не может быть пустым';
	}

	return '';
};

export const emailValidator = (email: string) => {
	if (isEmptyValidator(email)) {
		return isEmptyValidator(email);
	}

	const regExp = /[a-zA-Z-\._]*@[a-zA-Z]*\.[a-zA-Z]*/gi;

	if (!regExp.test(email)) {
		return 'Это поле заполненно некорректно';
	}

	return '';
};

export const loginValidator = (login: string) => {
	if (isEmptyValidator(login)) {
		return isEmptyValidator(login);
	}

	return '';
};

export const passwordValidator = (pass: string, passAgain?: string) =>  {
	const MIN_LENGTH = 6;
	const MAX_LENGTH = 10;

	if (isEmptyValidator(pass)) {
		return isEmptyValidator(pass);
	}

	if (pass.length < MIN_LENGTH || pass.length > MAX_LENGTH) {
		return 'Длина пароля может быть от 6 до 10 символов';
	}

	if (passAgain && pass !== passAgain) {
		return 'Пароль не совпадает';
	}

	return '';
}

export const phoneValidator = (value: string) => {
	if (isEmptyValidator(value)) {
		return isEmptyValidator(value);
	}

	const regExp = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;


	if (!regExp.test(value)) {
		return 'Это поле заполненно некорректно';
	}

	return '';
}

export const validateByType = (id: string, value: string, password?: string) => {
	switch (id) {
		case "email":
			return emailValidator(value);
		case "password":
			return passwordValidator(value);
		case "newPassword":
			return passwordValidator(value);
		case "oldPassword":
			return passwordValidator(value);
		case "login":
			return loginValidator(value);
		case "phone":
			return phoneValidator(value);
		case "rePassword":
			return passwordValidator(password || '', value);
		case "reNewPassword":
			console.log('==========>password', password);
			console.log('==========>value', value);
			return passwordValidator(password || '', value);
		default:
			return isEmptyValidator(value);
	}
}
