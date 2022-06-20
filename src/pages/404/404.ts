import { Block } from "../../shared/utils";

import "./404.scss";

class Page404 extends Block {

	protected render(): string {
		// language=hbs
		return `
			<main>
					<div class="error-404-page">
              <div class="error-404-page__wrapper">
                  <h2>404</h2>
                  {{{Typography text="Мы уже фиксим" size="lg"}}}
                  {{{Link href="/chat" text="Назад к чатам" color="blue"}}}
              </div>
          </div>
			</main>
		`;
	}
}

export default Page404;
