import { Block } from '../../shared/utils';

import './avatar.scss';

interface IAvatar {
	name: string;
}

class Avatar extends Block {
  constructor({ name }: IAvatar) {
    super({ name });
  }

	static get blockName() {
		return 'Avatar';
	}

  protected render(): string {
    // language=hbs
    return `
		<div class="avatar-wrapper">
	    <div class="avatar">
	        <img src="../../images/avatar.png" alt="avatar" />
	    </div>
    	<div class="avatar-hover">
			    {{{Typography text="Поменять аватар" size="md" color="white" }}}
	    </div>
    	<span class="name">{{name}}</span>
		</div>
		`;
  }
}

export default Avatar;
