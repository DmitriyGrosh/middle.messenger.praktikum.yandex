import { Block } from "../../shared/utils";

import "./login.scss";

class Login extends Block {

	protected render(): string {
		// language=hbs
		return `
		<main class="login-page">
    		{{#AuthForm header="Логин" formId="login" textButton="Авторизоваться" textLink="Нет аккаунта" hrefLink="/register"}}
            {{{Input type="text" label="Логин" inputId="login"}}}
            {{{Input type="password" label="Пароль" inputId="password"}}}
        {{/AuthForm}}
     </main>
		`;
	}
}

export default Login;
