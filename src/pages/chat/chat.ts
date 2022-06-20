import { Block } from "../../shared/utils";

import "./chat.scss";

class Chat extends Block {

	protected getStateFromProps() {
		this.state = {
			onClick: () => {
				console.log('==========>123123', 123123)
			},
		};
	};

	protected render(): string {
		// language=hbs
		return `
			<main class="chat-page">
          {{{ChatSidebar}}}
			</main>
		`;
	}
}

export default Chat;
