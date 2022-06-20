import { Block } from "../../shared/utils";

import "./chatElement.scss";

interface IChatElement {
	time: string;
	name: string;
	message: string;
	avatar: string;
	onClick: () => void;
}

class ChatElement extends Block {
	constructor({ onClick, time, name, message, avatar }: IChatElement) {
		super({ time, name, message, avatar, events: { click: onClick }, });
	};

	protected render(): string {
		// language=hbs
		return `
			<div class="chat-element">
					<div class="chat-element__avatar">
							<div class="chat-element__avatar__circle"></div>
					</div>
					<div class="chat-element__content">
              {{{Typography text=name size="lg" color="black"}}}
              {{{Typography text=message size="md" color="gray"}}}
					</div>
					<div class="chat-element__time">
							{{{Typography text=time size="sm" color="gray"}}}
					</div>
			</div>
		`;
	}

}

export default ChatElement;
