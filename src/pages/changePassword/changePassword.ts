import { Block } from "../../shared/utils";

import { changePassword } from "../../shared/const";

import "./changePassword.scss";

interface IChangePassword {
	links?: typeof changePassword;
}

class ChangePassword extends Block {
	constructor({ links = changePassword }: IChangePassword) {
		super({ links });
	}

	protected render(): string {
		// language=hbs
		return `
		 <main class="change-password-page">
         {{{LeftSidebar href="/profile"}}}
				 <div class="change-password-page__content">
             {{{Avatar name="Dima"}}}
						 <form id="change-password-form" class="information">
								 {{#each links}}
										 {{#with this}}
											 {{#ListProfile}}
	                         {{{Typography text=key size="md"}}}
	                         {{{Typography text=value size="md" color="gray"}}}
											 {{/ListProfile}}
										 {{/with}}
								 {{/each}}
								 <div class="information__buttons">
                     {{{Button type="submit" text="Сохранить"}}}
								 </div>
						 </form>
				 </div>
        </main>
		`;
	};
}

export default ChangePassword;
