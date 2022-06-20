import { Block } from '../../shared/utils';

import './listProfile.scss';

class ListProfile extends Block {
  protected render(): string {
    // language=hbs
    return `
		<div class="list-profile">
        <div class="list-profile__content" data-layout=1></div>
		</div>
		`;
  }
}

export default ListProfile;
