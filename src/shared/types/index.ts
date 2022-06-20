export type BlockProps = {
	events?: Partial<Record<keyof GlobalEventHandlersEventMap, (e: Event) => void>>
} & Record<string, unknown>;
