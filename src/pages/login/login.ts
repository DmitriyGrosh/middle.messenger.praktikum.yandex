import { Block } from '../../shared/utils';
import {
  loginValidator,
  passwordValidator,
  validateByType,
} from '../../shared/utils/validator';

import './login.scss';

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
          login: (this.refs.login.querySelector('#login') as HTMLInputElement).value ?? '',
          password: (this.refs.password.querySelector('#password') as HTMLInputElement).value ?? '',
        };

        const nextState = {
          errors: {
            login: loginValidator(loginData.login),
            password: passwordValidator(loginData.password),
          },
          values: { ...loginData },
        };

        this.setState(nextState);

        console.log('action/login', loginData);

        const { login, password } = this.state;

        if (!login && !password) {
          // eslint-disable-next-line max-len
          // сделал сет таймаут для того чтобы можно было увидеть в консоли что данные выводятся и потом сдлеать переход на чаты
          setTimeout(() => {
            window.location.href = '/chat';
          }, 5000);
        }
      },

      onBlur: (event: Event) => {
        const { id, value } = event.target as HTMLInputElement;

        const nextState = {
          errors: {
            ...this.state.errors,
            [id]: validateByType(id, value, this.state.password),
          },
          values: {
            ...this.state.values,
            [id]: value,
          },
        };

        this.setState(nextState);
      },
    };
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
                    onChangeBlur=onBlur
				            ref="login"
                    inputId="login"
				            type="text"
				            label="Логин"
				            inputId="login"
                    value="${values.login}"
                    error="${errors.login}"
            }}}
            {{{Input
                    onChangeBlur=onBlur
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
