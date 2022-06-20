import Block from './Block';
import * as Handlebars from "handlebars";

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
				hash[key] = hash[key].replace(new RegExp(`{{${String(key)}}}`, 'i'), this[key]);
			}
		});

		const component = new Component(hash);

		children[component.id] = component;

		if (ref) {
			refs[ref] = component.getContent();
		}

		const contents = fn ? fn(this): '';

		return `<div data-id="${component.id}">${contents}</div>`;
	})
}
