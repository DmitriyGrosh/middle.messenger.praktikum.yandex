import { Block } from '../../shared/utils';

import './leftSidebar.scss';

interface ILeftSidebar {
	href: string;
}

class LeftSidebar extends Block {
  constructor({ href }: ILeftSidebar) {
    super({ href });
  }

  protected render(): string {
    // language=hbs
    return `
		<div class="left-sidebar">
    	<a class="arrow" href="{{href}}"></a>
		</div>
		`;
  }
}

export default LeftSidebar;
