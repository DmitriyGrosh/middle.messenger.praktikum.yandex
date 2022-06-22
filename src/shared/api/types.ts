// eslint-disable-next-line no-shadow
export enum METHOD {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
}

export type Options = {
	method: METHOD;
	data?: any;
};

export type OptionsWithoutMethod = Omit<Options, 'method'>;
