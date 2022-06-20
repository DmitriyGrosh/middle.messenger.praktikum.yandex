import { Block } from "../../shared/utils";

import "./changePassword.scss";

class ChangePassword extends Block {

	protected render(): string {
		// language=hbs
		return `
		 <main class="change-password-page">
         {{{LeftSidebar href="profile.hbs"}}}
				 <div class="change-password-page__content">
             {{{Avatar name="Dima"}}}
						 <form id="change-password-form" class="information">
								 {{#each data.changePassword}}
										 {{#ListProfile}}
                         {{{Typography text=this.key size="md"}}}
                         {{{Typography text=this.value size="md" color="gray"}}}
										 {{/ListProfile}}
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
