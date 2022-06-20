import { Block } from "../../shared/utils";
import { chats as chatsContent } from "../../shared/const";

import "./chatSidebar.scss";
import chat from "../../pages/chat/chat";

interface IChatSidebar {
	chats?: typeof chatsContent;
}

class ChatSidebar extends Block {
	constructor({ chats = chatsContent }: IChatSidebar) {
		super({ chats });
	}

	protected getStateFromProps() {
		this.state = {
			onChange: (event: Event) => {
				console.log('==========>event', event);
				console.log('==========>123123', 123123)
			},

			onClick: () => {
				console.log('==========>44444', 44444);
			},

			chatsTest: chatsContent.map((el) => ({
				...el,
				handleClick: () => {
					this.state.onClick();
				},
			})),
		};
	};

	protected render(): string {
		//language=hbs
		return `
			<div class="chat-sidebar">
					{{{SidebarHeader onChangeTest=onChange}}}
					<div class="chat-sidebar__content">
              {{#each this.chatsTest}}
                  {{{ChatElement onClick=handleClick time=time name=name message=message avatar=avatar}}}
              {{/each}}
					</div>
			</div>
		`;
	}
}

export default ChatSidebar;
