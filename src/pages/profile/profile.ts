import { Block } from "../../shared/utils";

import { information, profileLinks as profiles } from "../../shared/const";

import "./profile.scss";

interface IProfile {
	informationLinks?: typeof information;
	profileLinks?: typeof profiles;
}

class Profile extends Block {
	constructor({ informationLinks = information, profileLinks = profiles }: IProfile) {
		super({ informationLinks, profileLinks });
	}
	protected render(): string {
		// language=hbs
		return `
        <main class="profile-page">
            {{{LeftSidebar href="/chat"}}}
            <div class="profile-page__content">
                {{{Avatar name="Dima"}}}
                <div class="information">
                    {{#each informationLinks}}
                        {{#with this}}
	                        {{#ListProfile}}
			                        {{{Typography text=key size="md"}}}
	                            {{{Typography text=value size="md" color="gray"}}}
	                        {{/ListProfile}}
                        {{/with}}
                    {{/each}}
                </div>
                <div class="links">
                    {{#each profileLinks}}
                        {{#with this}}
	                        {{#ListProfile}}
	                            {{{Link href=href text=text color=color size="md"}}}
	                        {{/ListProfile}}
                        {{/with}}
                    {{/each}}
                </div>
            </div>
        </main>
		`;
	}
}

export default Profile;
