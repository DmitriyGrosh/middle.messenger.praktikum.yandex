import { Block, registerComponent, renderDom } from "./shared/utils";

import {
	LeftSidebar,
	Input,
	Button,
	Typography,
	Avatar,
	LinkProfile,
	ListProfile,
} from "./components";

import { AuthForm } from "./layouts";

import {
	Login,
	Profile,
	Chat,
	ChangePassword,
	ChangeInformation,
	Page505,
	Page404,
	Register,
} from "./pages";

const components = [
	ListProfile,
	LinkProfile,
	Avatar,
	Typography,
	Button,
	Input,
	LeftSidebar,
	AuthForm,
];

components.forEach((Component) => {
	registerComponent(Component);
});

document.addEventListener('DOMContentLoaded', () => {
	const router = (): Block => {
		const { pathname } = window.location;
		switch (pathname) {
			case '/':
				return new Login({});
			case '/register':
				return new Register({});
			case '/chat':
				return new Chat({});
			case '/change-information':
				return new ChangeInformation({});
			case '/profile':
				return new Profile({});
			case '/change-password':
				return new ChangePassword({});
			case '/505':
				return new Page505({});
			case '/404':
				return new Page404({});
			default:
				return new Page404({});
		}
	}

	renderDom(router());
});
