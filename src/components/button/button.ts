import { Block } from "../../shared/utils";

import "./button.scss";

interface IButton {
	type?: string;
	text: string;
	onClick?: () => void;
}

class Button extends Block {
	constructor({ type = 'button', text, onClick = () => {} }: IButton) {
		super({ type, text, events: { click: onClick }});
	}

	protected render(): string {

		// language=hbs
		return `
        <button type="{{type}}" class="button-default">{{text}}</button>
		`;
	}
}

export default Button;
