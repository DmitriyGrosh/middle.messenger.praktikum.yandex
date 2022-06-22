import { Block } from '../../shared/utils';
import { chats } from '../../shared/const';

import './chatContent.scss';

interface IChatContent {
	activeChatId: number;
}

class ChatContent extends Block {
  constructor({ activeChatId }: IChatContent) {
    super({ activeChatId });
  }

  static get blockName() {
    return 'ChatContent';
  }

  protected getStateFromProps() {
    this.state = {
      values: {
        chat: '',
      },
      user: chats[0],
      messages: [],
    };
  }

  componentDidMount() {
    this.setState({
      user: chats.find((el) => el.id === this.props.activeChatId),
    });
  }

  protected render(): string {
    const { values } = this.state;
    // language=hbs
    return `
			<div class="chat-content">
					<div class="chat-content__header">
							<div class="chat-content__header__account">
									<div class="circle"></div>
									{{{Typography text=user.name size="md"}}}
							</div>
							<div class="chat-content__header__settings">
									<span>.</span>
									<span>.</span>
									<span>.</span>
							</div>
					</div>
					<div class="chat-content__messages"></div>
					<div class="chat-content__footer">
							<div class="chat-content__footer__staple"></div>
							<div class="chat-content__footer__chat">
                  {{{Input
                          onChangeTest=handleChange
                          ref="chat"
                          inputId="chat"
                          type="text"
                          value="${values.chat}"
                  }}}
							</div>
							<div class="chat-content__footer__send">
									{{{Button onClick=handleSubmit text="->"}}}
							</div>
					</div>
			</div>
		`;
  }
}

export default ChatContent;
