import { Block } from "../../shared/utils";

import "./typography.scss";

interface ITypography {
	color: string;
	size: string;
	text: string;
}

class Typography extends Block {
	constructor({ color, size, text }: ITypography) {
		super({ color, size, text });
	}

	protected render(): string {
		// language=hbs
		return `
			<span class="typography {{color}} {{size}}">{{text}}</span>
		`;
	}
}

export default Typography
