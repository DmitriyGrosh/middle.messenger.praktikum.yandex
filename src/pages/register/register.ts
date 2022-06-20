import { Block } from "../../shared/utils";
import {
	emailValidator,
	isEmptyValidator,
	loginValidator,
	passwordValidator,
	phoneValidator
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
					window.location.href = '/chat';
				}
			}
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
                        value="${values.email}"
                        error="${errors.email}"
                        ref="email"
                        inputId="email"
				                type="text"
				                label="Почта"
                }}}
                {{{Input
				                type="text"
				                label="Логин"
                        value="${values.login}"
                        error="${errors.login}"
                        ref="login"
                        inputId="login"
                }}}
                {{{Input
				                type="text"
				                label="Имя"
                        value="${values.firstName}"
                        error="${errors.firstName}"
                        ref="firstName"
                        inputId="firstName"
                }}}
                {{{Input
				                type="text"
				                label="Фамилия"
                        value="${values.lastName}"
                        error="${errors.lastName}"
                        ref="lastName"
                        inputId="lastName"
                }}}
                {{{Input
				                type="number"
				                label="Телефон"
                        value="${values.phone}"
                        error="${errors.phone}"
                        ref="phone"
                        inputId="phone"
                }}}
                {{{Input
				                type="password"
				                label="Пароль"
                        value="${values.password}"
                        error="${errors.password}"
                        ref="password"
                        inputId="password"
                }}}
                {{{Input
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
