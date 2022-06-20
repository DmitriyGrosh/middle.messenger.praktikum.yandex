import { Block } from '../../shared/utils';

import './500.scss';

class Page505 extends Block {
  protected render(): string {
    // language=hbs
    return `
		<main>
			<div class="error-500-page">
            <div class="error-500-page__wrapper">
                <h2>500</h2>
                {{{Typography text="Мы уже фиксим" size="lg"}}}
                {{{Link href="chat.hbs" text="Назад к чатам" color="blue"}}}
            </div>
        </div>
		</main>
		`;
  }
}

export default Page505;
