import { Block } from '../../shared/utils';

import './chat.scss';

class Chat extends Block {
  protected getStateFromProps() {
    this.state = {
      chatId: null,
      handleClick: (id: number) => {
        this.setState({
          chatId: id,
        });
      },
    };
  }

  protected render(): string {
    // language=hbs
    return `
			<main class="chat-page">
          {{{ChatSidebar onClick=handleClick}}}
					<div class="chat-page__content">
              {{#if chatId}}
                  {{{ChatContent activeChatId=chatId}}}
              {{else}}
                  {{{Typography
                    text="Выберите чат чтобы отправить сообщение"
                    color="gray"
                    size="md"
                  }}}
              {{/if}}
					</div>
			</main>
		`;
  }
}

export default Chat;
