import { Block } from "../../shared/utils";

import "./input.scss";

interface IInput {
	onChangeTest?: () => void;
	onChangeBlur?: (event: Event) => void;
	onChangeFocus?: (event: Event) => void;
	type?: 'text' | 'email' | 'password';
	inputId?: string;
	label?: string;
	value?: string;
	required?: boolean;
	error?: string;
}


class Input extends Block {
	constructor({
			type = 'text',
			inputId,
			label,
			required,
			error,
			value,
			// почему если принимать именна пропсов как onChange или onBlur, то выкидывает ошибку
			onChangeBlur,
			onChangeFocus,
		            onChangeTest = () => {},
		}: IInput) {
		super({
			type,
			inputId,
			label,
			error,
			value,
			required,
			events: { input: onChangeTest, focus: onChangeFocus, blur: onChangeBlur },
		});
	}

	addInputEvents() {
		const events: Record<string, () => void> = (this.props as any).events;

		if (!events) {
			return;
		}

		Object.entries(events).forEach(([event, listener]) => {
			if (this.props.inputId && this._element?.querySelector(`#${this.props.inputId}`)) {
				this._element?.querySelector(`#${this.props.inputId}`)?.addEventListener(event, listener)
			} else {
				this._element!.addEventListener(event, listener);
			}
		});
	}

	componentDidMount() {
		this.addInputEvents();
	}

	protected render(): string {

		// language=hbs
		return `
		<div class="input-wrapper">
	    <div class="input-container">
	        <input type="{{type}}" id="{{inputId}}" class="input-default" value="{{value}}">
	        <label for="{{inputId}}" class="label-default">{{label}}</label>
	    </div>
	    {{#if error}}
          {{{Typography color="red" size="sm" text=error}}}
	    {{/if}}
		</div>
		`;
	}
}

export default Input;
