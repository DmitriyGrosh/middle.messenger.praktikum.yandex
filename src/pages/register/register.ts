import { Block } from "../../shared/utils";
import {
	emailValidator,
	isEmptyValidator,
	loginValidator,
	passwordValidator,
	phoneValidator,
} from "../../shared/utils/validator";

import "./register.scss";

class Register extends Block {
	protected getStateFromProps() {
		this.state = {
			values: {
				login: '',
				password: '',
				email: '',
				firstName: '',
				lastName: '',
				phone: '',
				rePassword: '',
			},
			errors: {
				login: '',
				password: '',
				email: '',
				firstName: '',
				lastName: '',
				phone: '',
				rePassword: '',
			},

			onRegister: (event: Event) => {
				event.preventDefault();

				const registerData = {
					login: (this.refs.login.querySelector("#login") as HTMLInputElement).value,
					password: (this.refs.password.querySelector("#password") as HTMLInputElement).value,
					email: (this.refs.email.querySelector("#email") as HTMLInputElement).value,
					firstName: (this.refs.firstName.querySelector("#firstName") as HTMLInputElement).value,
					lastName: (this.refs.lastName.querySelector("#lastName") as HTMLInputElement).value,
					phone: (this.refs.phone.querySelector("#phone") as HTMLInputElement).value,
					rePassword: (this.refs.rePassword.querySelector("#rePassword") as HTMLInputElement).value,
				};

				const nextState = {
					errors: {
						login: loginValidator(registerData.login),
						password: passwordValidator(registerData.password),
						email: emailValidator(registerData.email),
						firstName: isEmptyValidator(registerData.firstName),
						lastName: isEmptyValidator(registerData.lastName),
						phone: phoneValidator(registerData.phone),
						rePassword: passwordValidator(registerData.password, registerData.rePassword),
					},
					values: { ...registerData },
				};

				this.setState(nextState);

				const { login, password, email, firstName, lastName, phone, rePassword } = this.state.errors;

				console.log('action/register', registerData);

				if (!login && !password && !email && !firstName && !lastName && !phone && !rePassword) {
					// сделал сет таймаут для того чтобы можно было увидеть в консоли что данные выводятся и потом сдлеать переход на чаты
					setTimeout(() => {
						window.location.href = '/chat';
					}, 10000)
				}
			},

			onBlur: (event: Event) => {
				const { id, value } = event.target as HTMLInputElement;
				const validateByType = () => {
					switch (id) {
						case "email":
							return emailValidator(value);
						case "password":
							return passwordValidator(value);
						case "login":
							return loginValidator(value);
						case "phone":
							return phoneValidator(value);
						case "rePassword":
							return passwordValidator(this.state.values.password, value);
						default:
							return isEmptyValidator(value);
					}
				}

				const nextState = {
					errors: {
						...this.state.errors,
						[id]: validateByType(),
					},
					values: {
						...this.state.values,
						[id]: value,
					},
				};

				this.setState(nextState);
			},
		}
	}

	protected render(): string {
		const { errors, values } = this.state;

		// language=hbs
		return `
        <main class="register-page">
            {{#AuthForm
				            onSubmit=onRegister
				            header="Логин"
				            formId="login"
				            textButton="Зарегестрироваться"
				            textLink="Войти"
				            hrefLink="/"
				            className="register-content"
            }}
                {{{Input
				                onChangeBlur=onBlur
                        value="${values.email}"
                        error="${errors.email}"
                        ref="email"
                        inputId="email"
				                type="text"
				                label="Почта"
                }}}
                {{{Input
                        onChangeBlur=onBlur
				                type="text"
				                label="Логин"
                        value="${values.login}"
                        error="${errors.login}"
                        ref="login"
                        inputId="login"
                }}}
                {{{Input
                        onChangeBlur=onBlur
				                type="text"
				                label="Имя"
                        value="${values.firstName}"
                        error="${errors.firstName}"
                        ref="firstName"
                        inputId="firstName"
                }}}
                {{{Input
                        onChangeBlur=onBlur
				                type="text"
				                label="Фамилия"
                        value="${values.lastName}"
                        error="${errors.lastName}"
                        ref="lastName"
                        inputId="lastName"
                }}}
                {{{Input
                        onChangeBlur=onBlur
				                type="number"
				                label="Телефон"
                        value="${values.phone}"
                        error="${errors.phone}"
                        ref="phone"
                        inputId="phone"
                }}}
                {{{Input
                        onChangeBlur=onBlur
				                type="password"
				                label="Пароль"
                        value="${values.password}"
                        error="${errors.password}"
                        ref="password"
                        inputId="password"
                }}}
                {{{Input
                        onChangeBlur=onBlur
				                type="password" 
				                label="Пароль (ещё раз)"
                        value="${values.rePassword}"
                        error="${errors.rePassword}"
                        ref="rePassword"
                        inputId="rePassword"
                }}}
            {{/AuthForm}}
        </main>
		`;
	};
}

export default Register;
