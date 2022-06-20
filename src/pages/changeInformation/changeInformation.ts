import { Block } from "../../shared/utils";

import "./changeInformation.scss";

class ChangeInformation extends Block {

	protected render(): string {
		// language=hbs
		return `
		 <main class="change-information-page">
         {{{LeftSidebar href="profile.hbs"}}}
				 <div class="change-information-page__content">
                {{{Avatar name="Dima"}}}
                <form id="change-information-form" class="information">
                    {{#each data.information}}
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
	}
}

export default ChangeInformation;
