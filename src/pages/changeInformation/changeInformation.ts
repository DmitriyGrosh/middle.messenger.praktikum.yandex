import { Block } from "../../shared/utils";

import {
	emailValidator,
	isEmptyValidator,
	loginValidator,
	phoneValidator,
	validateByType
} from "../../shared/utils/validator";

import "./changeInformation.scss";

class ChangeInformation extends Block {
	protected getStateFromProps()
	{
		this.state = {
			isDouble: {
				login: true,
				email: true,
				firstName: true,
				lastName: true,
				chatName: true,
				phone: true,
			},
			values: {
				login: 'test',
				email: 'test@test.com',
				firstName: 'Дима',
				lastName: 'Грош',
				chatName: '@groshidze',
				phone: '8 (965) 327-74-55',
			},
			errors: {
				login: '',
				email: '',
				firstName: '',
				lastName: '',
				chatName: '',
				phone: '',
			},

			onSubmit: (event: Event) => {
				event.preventDefault();

				const registerData = {
					login: (this.refs.login.querySelector("#login") as HTMLInputElement).value,
					email: (this.refs.email.querySelector("#email") as HTMLInputElement).value,
					firstName: (this.refs.firstName.querySelector("#firstName") as HTMLInputElement).value,
					lastName: (this.refs.lastName.querySelector("#lastName") as HTMLInputElement).value,
					phone: (this.refs.phone.querySelector("#phone") as HTMLInputElement).value,
					chatName: (this.refs.chatName.querySelector("#chatName") as HTMLInputElement).value,
				};

				const nextState = {
					errors: {
						login: loginValidator(registerData.login),
						email: emailValidator(registerData.email),
						firstName: isEmptyValidator(registerData.firstName),
						lastName: isEmptyValidator(registerData.lastName),
						chatName: isEmptyValidator(registerData.chatName),
						phone: phoneValidator(registerData.phone),
					},
					values: { ...registerData },
				};

				this.setState(nextState);
			},

			onFocus: (event: Event) => {
				const { id } = event.target as HTMLInputElement;

				document?.getElementById(id)?.classList.remove("input-default__border-none");
			},

			onBlur: (event: Event) => {
				const { id, value } = event.target as HTMLInputElement;

				document?.getElementById(id)?.classList.add("input-default__border-none");

				const nextState = {
					errors: {
						...this.state.errors,
						[id]: validateByType(id, value),
					},
					values: {
						...this.state.values,
						[id]: value,
					},
				};

				this.setState(nextState);
			}
		};
	}

	protected render(): string {
		const { isDouble, values, errors } = this.state;

		// language=hbs
		return `
		 <main class="change-information-page">
         {{{LeftSidebar href="/profile"}}}
				 <div class="change-information-page__content">
                {{{Avatar name="Dima"}}}
                <form id="change-information-form" class="information">
                    {{#ListProfile}}
                        {{{Typography text="Почта" size="md"}}}
                        {{{Input
                                isDouble="${isDouble.email}"
                                onChangeFocus=onFocus
                                onChangeBlur=onBlur
                                ref="email"
                                inputId="email"
                                type="text"
                                inputId="email"
                                value="${values.email}"
                                error="${errors.email}"
                        }}}
                    {{/ListProfile}}
		 
                    {{#ListProfile}}
                        {{{Typography text="Логин" size="md"}}}
                        {{{Input
                                isDouble="${isDouble.login}"
                                onChangeFocus=onFocus
                                onChangeBlur=onBlur
                                ref="login"
                                inputId="login"
                                type="text"
                                inputId="login"
                                value="${values.login}"
                                error="${errors.login}"
                        }}}
                    {{/ListProfile}}
							     	{{#ListProfile}}
                        {{{Typography text="Имя" size="md"}}}
                        {{{Input
                                isDouble="${isDouble.firstName}"
                                onChangeFocus=onFocus
                                onChangeBlur=onBlur
                                ref="firstName"
                                inputId="firstName"
                                type="text"
                                inputId="firstName"
                                value="${values.firstName}"
                                error="${errors.firstName}"
                        }}}
							     	{{/ListProfile}}
							     	{{#ListProfile}}
                        {{{Typography text="Фамилия" size="md"}}}
                        {{{Input
                                isDouble="${isDouble.lastName}"
                                onChangeFocus=onFocus
                                onChangeBlur=onBlur
                                ref="lastName"
                                inputId="lastName"
                                type="text"
                                inputId="lastName"
                                value="${values.lastName}"
                                error="${errors.lastName}"
                        }}}
							     	{{/ListProfile}}
							     	{{#ListProfile}}
                        {{{Typography text="Имя в чате" size="md"}}}
                        {{{Input
                                isDouble="${isDouble.chatName}"
                                onChangeFocus=onFocus
                                onChangeBlur=onBlur
                                ref="chatName"
                                inputId="chatName"
                                type="text"
                                inputId="chatName"
                                value="${values.chatName}"
                                error="${errors.chatName}"
                        }}}
							     	{{/ListProfile}}
							     	{{#ListProfile}}
                        {{{Typography text="Телефон" size="md"}}}
                        {{{Input
                                isDouble="${isDouble.phone}"
                                onChangeFocus=onFocus
                                onChangeBlur=onBlur
                                ref="phone"
                                inputId="phone"
                                type="text"
                                inputId="phone"
                                value="${values.phone}"
                                error="${errors.phone}"
                        }}}
							     	{{/ListProfile}}
                    <div class="information__buttons">
                        {{{Button type="submit" text="Сохранить" onClick=onSubmit}}}
                    </div>
                </form>
            </div>
        </main>
		`;
	}
}

export default ChangeInformation;
