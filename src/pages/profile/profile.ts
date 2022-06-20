import { Block } from "../../shared/utils";

import "./profile.scss";

class Profile extends Block {
	protected render(): string {
		// language=hbs
		return `
        <main class="profile-page">
            {{{LeftSidebar href="chat.hbs"}}}
            <div class="profile-page__content">
                {{{Avatar name="Dima"}}}
                <div class="information">
                    {{#each data.information}}
                        {{#ListProfile}}
                            {{{Typography text=this.key size="md"}}}
                            {{{Typography text=this.value size="md" color="gray"}}}
                        {{/ListProfile}}
                    {{/each}}
                </div>
                <div class="links">
                    {{#each data.profileLinks}}
                        {{#ListProfile}}
                            {{{Link href=this.href text=this.text color=this.color size="md"}}}
                        {{/ListProfile}}
                    {{/each}}
                </div>
            </div>
        </main>
		`;
	}
}

export default Profile;
