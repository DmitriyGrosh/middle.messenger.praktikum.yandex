import { Block } from '../../shared/utils';

import './sidebatHeader.scss';

interface ISidebarHeader {
	onChangeTest: (event: Event) => void;
}

class SidebarHeader extends Block {
  constructor({ onChangeTest = () => {} }: ISidebarHeader) {
    super({ events: { input: onChangeTest } });
  }

	static get blockName() {
		return 'SidebarHeader';
	}

  protected render(): string {
    // language=hbs
    return `
			<div class="sidebar-header">
					<div class="sidebar-header__row">
              {{{Link href="/profile" text="Профиль >" color="gray"}}}
					</div>
					<div class="sidebar-header__row">
							<input
											class="sidebar-header__row__input"
											type="text"
											placeholder="Поиск"
							>
					</div>
			</div>
		`;
  }
}

export default SidebarHeader;
