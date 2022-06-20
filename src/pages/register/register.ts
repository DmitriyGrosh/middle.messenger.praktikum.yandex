import { Block } from "../../shared/utils";

import "./register.scss";

class Register extends Block {

	protected render(): string {
		// language=hbs
		return `
        <main class="register-page">
            {{#AuthForm header="Логин" formId="login" textButton="Зарегестрироваться" textLink="Войти" hrefLink="/" className="register-content"}}
                {{{Input type="email" label="Почта" inputId="email"}}}
                {{{Input type="text" label="Логин" inputId="login"}}}
                {{{Input type="text" label="Имя" inputId="firstName"}}}
                {{{Input type="text" label="Фамилия" inputId="lastName"}}}
                {{{Input type="number" label="Телефон" inputId="phone"}}}
                {{{Input type="password" label="Пароль" inputId="password"}}}
                {{{Input type="password" label="Пароль (ещё раз)" inputId="rePassword"}}}
            {{/AuthForm}}
        </main>
		`;
	};
}

export default Register;
