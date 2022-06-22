import { Block } from '../../shared/utils';

import './link.scss';

interface ILink {
	color: string;
	size: string;
	href: string;
	text: string;
}

class Link extends Block {
  constructor({
    color, href, size, text,
  }: ILink) {
    super({
      color, href, size, text,
    });
  }

	static get blockName() {
		return 'Link';
	}

  protected render(): string {
    // language=hbs
    return `
			<a class="link {{color}} {{size}}" href="{{href}}">{{text}}</a>
		`;
  }
}

export default Link;
