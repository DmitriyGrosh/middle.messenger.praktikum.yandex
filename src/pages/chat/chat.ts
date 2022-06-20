import { Block } from "../../shared/utils";

import "./chat.scss";

class Chat extends Block {

	protected render(): string {
		// language=hbs
		return `
			<main class="chat-page">
					<h1>Chat</h1>
          {{{Link href="profile.hbs" text="Профиль"}}}
			</main>
		`;
	}
}

export default Chat;
