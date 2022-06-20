import * as Handlebars from "handlebars";

import Block from "./Block";

interface BlockConstructable<Props = any> {
	new(props: Props): Block;
}

export default function registerComponent<Props extends any>(Component: BlockConstructable<Props>) {
	Handlebars.registerHelper(Component.name, function (this: Props, { hash: { ref, ...hash }, data, fn }: Handlebars.HelperOptions) {
		if (!data.root.children) {
			data.root.children = {};
		}

		if (!data.root.refs) {
			data.root.refs = {};
		}

		const { children, refs } = data.root;

		(Object.keys(hash) as any).forEach((key: keyof Props) => {
			if (this[key]) {
				// console.log('==========>hash[key]', hash[key]);
				hash[key] = hash[key].replace(new RegExp(`{{${String(key)}}}`, 'i'), this[key]);
			}
		});

		const component = new Component(hash);
		// console.log('==========>component', component);

		children[component.id] = component;
		// console.log('==========>children[component.id]', children[component.id]);

		if (ref) {
			refs[ref] = component.getContent();
		}
		// console.log('==========>component.getContent()', component.getContent());

		// console.log('==========>children', children);
		const contents = fn ? fn(this): '';
		// console.log('==========>contents', contents);
		// console.log('==========>component.id', component.id);

		return `<div data-id="${component.id}">${contents}</div>`;
	})
}
