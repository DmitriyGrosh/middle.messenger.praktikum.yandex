import { Block } from "../../shared/utils";
import { chats as chatsContent } from "../../shared/const";

import "./chatSidebar.scss";
import chat from "../../pages/chat/chat";

interface IChatSidebar {
	chats?: typeof chatsContent;
	onClick?: (id: number) => void;
}

class ChatSidebar extends Block {
	constructor({ chats = chatsContent, onClick }: IChatSidebar) {
		super({ chats, onClick });
	}

	protected getStateFromProps() {
		this.state = {
			onChange: (event: Event) => {
				console.log('==========>event', event);
			},

			chatsTest: chatsContent.map((el) => ({
				...el,
				handleClick: () => {
					this.props.onClick(el.id);
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
