import { Block, registerComponent, renderDom } from "./shared/utils";

import {
	LeftSidebar,
	Input,
	Button,
	Typography,
	Avatar,
	LinkProfile,
	ListProfile,
	Layout,
} from "./components";

const components = [
	ListProfile,
	LinkProfile,
	Avatar,
	Typography,
	Button,
	Input,
	LeftSidebar,
	Layout,
];

components.forEach((Component) => {
	registerComponent(Component);
});

class MyComponent extends Block {
	render(): string {
		// language=hbs
		return `
			<div>
				<div>Hello !</div>
				<a href="/login">login</a>
          {{{Button text="Login"}}}
			</div>
		`;
	}
}

class MyComponent2 extends Block {
	render(): string {
		// language=hbs
		return `
        {{#Layout name="Onboarding" }}
            {{{Button text="Login"}}}
            <a href="/">login</a>
        {{/Layout}}
		`;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const router = (): Block => {
		const { pathname } = window.location;
		switch (pathname) {
			case '/':
				return new MyComponent({});
			case '/login':
				return new MyComponent2({});
			default:
				return new MyComponent({});
		}
	}

	renderDom(router());
});
