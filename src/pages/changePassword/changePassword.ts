import { Block } from '../../shared/utils';

import { changePassword } from '../../shared/const';

import './changePassword.scss';
import {
  passwordValidator,
  validateByType,
} from '../../shared/utils/validator';

interface IChangePassword {
	links?: typeof changePassword;
}

class ChangePassword extends Block {
  constructor({ links = changePassword }: IChangePassword) {
    super({ links });
  }

  protected getStateFromProps() {
    this.state = {
      isDouble: {
        oldPassword: true,
        newPassword: true,
        reNewPassword: true,
      },
      values: {
        oldPassword: '123456',
        newPassword: '',
        reNewPassword: '',
      },
      errors: {
        oldPassword: '',
        newPassword: '',
        reNewPassword: '',
      },

      onFocus: (event: Event) => {
        const { id } = event.target as HTMLInputElement;

        document?.getElementById(id)?.setAttribute('type', 'text');
      },
      onBlur: (event: Event) => {
        const { id, value } = event.target as HTMLInputElement;

        document?.getElementById(id)?.setAttribute('type', 'password');

        const nextState = {
          errors: {
            ...this.state.errors,
            [id]: validateByType(id, value, this.state.values.newPassword),
          },
          values: {
            ...this.state.values,
            [id]: value,
          },
        };

        this.setState(nextState);
      },
      onSubmit: (event: Event) => {
        event.preventDefault();

        const registerData = {
          oldPassword: (
            this.refs.oldPassword.querySelector('#oldPassword') as HTMLInputElement
          ).value ?? '',
          newPassword: (
            this.refs.newPassword.querySelector('#newPassword') as HTMLInputElement)
            .value ?? '',
          reNewPassword: (
            this.refs.reNewPassword.querySelector('#reNewPassword') as HTMLInputElement
          ).value ?? '',
        };

        const nextState = {
          errors: {
            oldPassword: passwordValidator(registerData.oldPassword),
            newPassword: passwordValidator(registerData.newPassword),
            reNewPassword: passwordValidator(registerData.reNewPassword, registerData.newPassword),
          },
          values: { ...registerData },
        };

        this.setState(nextState);
      },
    };
  }

  protected render(): string {
    const { isDouble, values, errors } = this.state;
    // language=hbs
    return `
		 <main class="change-password-page">
         {{{LeftSidebar href="/profile"}}}
				 <div class="change-password-page__content">
             {{{Avatar name="Dima"}}}
						 <form id="change-password-form" class="information">
                 {{#ListProfile}}
                     {{{Typography text="Старый пароль" size="md"}}}
                     {{{Input
                             isDouble="${isDouble.oldPassword}"
                             onChangeFocus=onFocus
                             onChangeBlur=onBlur
                             ref="oldPassword"
                             inputId="oldPassword"
                             type="password"
                             inputId="oldPassword"
                             value="${values.oldPassword}"
                             error="${errors.oldPassword}"
                     }}}
                 {{/ListProfile}}
                 {{#ListProfile}}
                     {{{Typography text="Новый пароль" size="md"}}}
                     {{{Input
                             isDouble="${isDouble.newPassword}"
                             onChangeFocus=onFocus
                             onChangeBlur=onBlur
                             ref="newPassword"
                             inputId="newPassword"
                             type="password"
                             inputId="newPassword"
                             value="${values.newPassword}"
                             error="${errors.newPassword}"
                     }}}
                 {{/ListProfile}}
                 {{#ListProfile}}
                     {{{Typography text="Повторите новый пароль" size="md"}}}
                     {{{Input
                             isDouble="${isDouble.reNewPassword}"
                             onChangeFocus=onFocus
                             onChangeBlur=onBlur
                             ref="reNewPassword"
                             inputId="reNewPassword"
                             type="password"
                             inputId="reNewPassword"
                             value="${values.reNewPassword}"
                             error="${errors.reNewPassword}"
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

export default ChangePassword;
