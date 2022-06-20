import { Block } from "../../shared/utils";

import { information } from "../../shared/const";

import "./changeInformation.scss";

interface IChangeInformation {
	informationLinks?: typeof information;
}

class ChangeInformation extends Block {
	constructor({ informationLinks = information }: IChangeInformation) {
		super({ informationLinks });
	}

	protected render(): string {

		// language=hbs
		return `
		 <main class="change-information-page">
         {{{LeftSidebar href="/profile"}}}
				 <div class="change-information-page__content">
                {{{Avatar name="Dima"}}}
                <form id="change-information-form" class="information">
                    {{#each informationLinks}}
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
	}
}

export default ChangeInformation;
