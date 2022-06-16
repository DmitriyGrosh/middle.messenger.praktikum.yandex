import { v4 as makeUUID } from "uuid";

import EventBus from "./eventBus";
import { isEqual } from "./methods";
import { RENDER_DELAY } from "../const";
import { BlockProps } from "../types";

class Block<T extends BlockProps> {
	static EVENTS = {
		INIT: 'init',
		FLOW_CDM: 'flow:component-did-mount',
		FLOW_CDU: 'flow:component-did-update',
		FLOW_RENDER: 'flow:render',
	}

	private _element: HTMLElement | null = null;
	private _meta: Record<string, unknown>;
	private _timeoutId: undefined | ReturnType<typeof setTimeout>;
	private _id: string;

	public props: T;
	public eventBus: () => EventBus;

	constructor(tagName: string = "div", props: T, selector: string | null = null) {
		const eventBus = new EventBus();

		this._meta = {
			tagName,
			props,
			selector,
		};
		this._id = makeUUID();
		this._timeoutId = undefined;
		this.props = this._makePropsProxy({ ...props, _id: this._id });

		this.eventBus = () => eventBus;
		this._registerEvents(eventBus);

		eventBus.emit(Block.EVENTS.INIT);
	}

	_registerEvents(eventBus: EventBus) {
		eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
		eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
	}

	_createResources() {
		const { tagName } = this._meta;
		this._element = this._createDocumentElement(tagName as string);
	}

	init() {
		this._createResources();
	}

	_componentDidMount() {
		this.componentDidMount();

		this._render();
	}

	componentDidMount() {
		return;
	}

	dispatchComponentDidMount() {
		this.eventBus().emit(Block.EVENTS.FLOW_CDM);
	}

	private _componentDidUpdate(oldProps: T, newProps: T) {
		if (!isEqual(oldProps, newProps)) {
			if (this._timeoutId) return

			this._timeoutId = setTimeout(() => {
				this._removeEvents()
				this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
				clearTimeout(this._timeoutId)
				this._timeoutId = undefined
			}, RENDER_DELAY)
		}
	}

	componentDidUpdate(oldProps: T, newProps:T) {
		console.log('==========>oldProps', oldProps);
		console.log('==========>newProps', newProps);

		return true;
	}

	setProps(nextProps: Record<string, unknown>) {
		if (!nextProps) {
			return;
		}

		Object.assign(this.props, nextProps);
	};

	get element() {
		return this._element;
	}

	private _render() {
		const block = this.render()
		const { selector } = this._meta

		if (selector) {
			const rootNode = document.querySelector(selector as string)
			if (rootNode) {
				rootNode.append(block)
				this._element = block
				this._addEvents()
			}
			return
		}

		if (this._element?.firstChild && block.firstChild) {
			if (this._element.parentNode) {
				this._element.parentNode.replaceChild(block, this._element)
				this._element = block
			}
		} else {
			this._element = block;
		}
		this._element?.setAttribute('data-id', this._id)

		this._addEvents()
	}

	render(): HTMLElement {
		return this._element as HTMLElement;
	}

	getContent(): HTMLElement {
		return this.element as HTMLElement;
	}

	private _makePropsProxy(props: T) {
		const self = this;

		const proxyProps = new Proxy(props, {
			get: (target, prop) => {
				if (typeof prop === 'string') {
					const value = target[prop];

					return typeof value === 'function' ? value.bind(target) : value;
				}
			},
			set: (target, prop: unknown, value) => {
				target[prop as keyof T] = value;
				self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);

				return true;
			},
			deleteProperty: () => {
				throw new Error('нет доступа');
			},
		});

		return proxyProps;
	}

	 private _createDocumentElement(tagName: string) {
		return document.createElement(tagName);
	}

	show(style = "block") {
		this.getContent().style.display = style;
	}

	hide(style = "none") {
		this.getContent().style.display = style;
	}

	remove() {
		this.getContent().remove()
	}

	private _addEvents() {
		const { events = {} } = this.props ;
		Object.keys(events).forEach((eventName:keyof GlobalEventHandlersEventMap) => {
			this._element?.addEventListener(eventName, events[eventName] as (e: Event) => void)
		})
	}

	private _removeEvents() {
		const { events = {} } = this.props;

		Object.keys(events).forEach((eventName: keyof GlobalEventHandlersEventMap) => {
			this._element?.removeEventListener(eventName, events[eventName] as (e: Event) => void)
		})
	}

	getId() {
		return this._id
	}
}

export default Block;
