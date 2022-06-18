import { Block } from "../../shared/utils";

import "./input.scss";

interface IInput {
	onChange?: () => void;
	type?: 'text' | 'email' | 'password';
	inputId?: string;
	label?: string;
	value?: string;
	required?: boolean;
	input?: {
		error: boolean;
		textError: string;
	}
}


class Input extends Block {
	constructor({
			type = 'text',
			inputId,
			label,
			required,
			input,
			value,
			onChange = () => {},
		}: IInput) {
		super({
			type,
			inputId,
			label,
			input,
			value,
			required,
			events: { input: onChange },
		});
	}

	protected render(): string {

		// language=hbs
		return `
		<div class="input-wrapper">
	    <div class="input-container">
	        <input type="{{type}}" id="{{inputId}}" class="input-default" value="{{value}}" required="{{required}}">
	        <label for="{{inputId}}" class="label-default">{{label}}</label>
	    </div>
	    {{#if input.error}}
	        {{Typography color="red" size="sm" text=input.textError}}
	    {{/if}}
		</div>
		`;
	}
}

export default Input;
