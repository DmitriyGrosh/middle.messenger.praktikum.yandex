import { Block } from '../../shared/utils';

import './authForm.scss';

interface IAuthForm {
	formId: string;
	header: string;
	textButton: string;
	hrefLink: string;
	textLink: string;
	className?: string;
	onSubmit?: (event: Event) => void;
}

class AuthForm extends Block {
  constructor({
    header, formId, textButton, textLink, hrefLink, className, onSubmit,
  }: IAuthForm) {
    super({
      header, formId, textButton, textLink, hrefLink, className, events: { submit: onSubmit },
    });
  }

	get getCompName() {
		return 'AuthForm';
	}

  protected render(): string {
    const classes = `content ${this.props.className || ''}`;
    // language=hbs
    return `
        <form id="{{id.formId}}" class="auth-form">
            <div class="header">
        			{{{Typography text=header size="lg" }}}
            </div>
		        <div class="${classes}" data-layout=1></div>
            <div class="links">
                {{{Button type="submit" text=textButton}}}
                {{{Link href=hrefLink text=textLink color="blue"}}}
            </div>
        </form>
		`;
  }
}

export default AuthForm;
