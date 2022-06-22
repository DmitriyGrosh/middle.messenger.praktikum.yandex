import { Block } from '../../shared/utils';

import './input.scss';

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
	isDouble?: boolean;
}

class Input extends Block {
  constructor({
    isDouble = false,
    type = 'text',
    inputId,
    label,
    required,
    error,
    value,
    // почему если принимать именна пропсов как onChange или onBlur, то выкидывает ошибку
    onChangeBlur = () => {},
    onChangeFocus = () => {},
    onChangeTest = () => {},
  }: IInput) {
    super({
      isDouble,
      type,
      inputId,
      label,
      error,
      value,
      required,
      events: { input: onChangeTest, focus: onChangeFocus, blur: onChangeBlur },
    });
  }

	static get blockName() {
		return 'Input';
	}

  addInputEvents() {
    const { events } = this.props as any;

    if (!events) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
			const currentElement = this._element?.querySelector(`#${this.props.inputId}`);

      if (this.props.inputId && currentElement) {
	      currentElement?.addEventListener(event, listener);
      } else {
				this._element!.addEventListener(event, listener);
      }
    });
  }

  componentDidMount() {
    this.addInputEvents();
  }

  protected render(): string {
    const classes = `input-default ${this.props.isDouble ? 'input-default__border-none' : ''}`;

    // language=hbs
    return `
		<div class="input-wrapper">
	    <div class="input-container">
	        <input type="{{type}}" id="{{inputId}}" class="${classes}" value="{{value}}">
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
