const isEqual = (a: unknown, b: unknown) => {
	const pull = new Map()

	const result = isEqualMaster(a, b)

	pull.clear()

	return result

	function getTypeOf(x: unknown): string {
		return Object.prototype.toString.call(x).slice(8, -1)
	}

	function isPrimitiveType(x: string) {
		return ['Number', 'String', 'NaN', 'Undefined', 'Boolean', 'Null', 'BigInt'].includes(x)
	}

	function isEqualMaster(a: unknown, b: unknown) {
		if (pull.has(a)) {
			return pull.get(a) === b
		}

		const typeA = getTypeOf(a)
		const typeB = getTypeOf(b)

		if (typeA !== typeB) return false

		if (isPrimitiveType(typeA)) {
			if (typeA === 'Number') {
				if (isNaN(a as number) || isNaN(b as number)) {
					return isNaN(a as number) && isNaN(b as number)
				}
			}

			return a === b
		}

		if (a === b) return true

		pull.set(a, b)
		pull.set(b, a)

		if (typeA === 'Array') {
			if ((a as unknown[]).length !== (b as unknown[]).length) return false

			for (let i = 0; i < (a as unknown[]).length; i++) {
				if (!isEqualMaster((a as unknown[])[i], (b as unknown[])[i])) return false
			}

			return true
		}
		const keysA = Object.keys(a as Record<string, unknown>)
		const keysB = Object.keys(b as Record<string, unknown>)

		if (keysA.length !== keysB.length) return false

		for (const key of keysA) {
			if (!keysB.includes(key)) return false
		}

		for (const key of keysA) {
			if (!isEqualMaster((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key])) {
				return false
			}
		}

		return true
	}
}

export default isEqual;
