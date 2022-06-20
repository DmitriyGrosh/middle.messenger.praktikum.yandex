import { Block } from "../../shared/utils";
import { loginValidator, passwordValidator } from "../../shared/utils/validator";

import "./login.scss";

class Login extends Block {
	protected getStateFromProps() {
		this.state = {
			values: {
				login: '',
				password: '',
			},
			errors: {
				login: '',
				password: '',
			},
			onLogin: (event: Event) => {
				event.preventDefault();

				const loginData = {
					login: (this.refs.login.querySelector("#login") as HTMLInputElement).value,
					password: (this.refs.password.querySelector("#password") as HTMLInputElement).value
				};

				const nextState = {
					errors: {
						login: loginValidator(loginData.login),
						password: passwordValidator(loginData.password),
					},
					values: { ...loginData },
				};

				this.setState(nextState);

				if (!this.state.errors.login && !this.state.errors.password) {
					window.location.href = '/chat';
				}

				console.log('action/login', loginData);
			}
		}
	}

	protected render(): string {
		const { errors, values } = this.state;

		// language=hbs
		return `
		<main class="login-page">
    		{{#AuthForm
						    header="Логин"
						    formId="login"
						    textButton="Авторизоваться"
						    textLink="Нет аккаунта"
						    hrefLink="/register"
                onSubmit=onLogin
		    }}
            {{{Input
				            ref="login"
                    inputId="login"
				            type="text"
				            label="Логин"
				            inputId="login"
                    value="${values.login}"
                    error="${errors.login}"
            }}}
            {{{Input
				            ref="password"
                    value="${values.password}"
                    error="${errors.password}"
				            type="password"
				            label="Пароль"
				            inputId="password"
            }}}
        {{/AuthForm}}
     </main>
		`;
	}
}

export default Login;
