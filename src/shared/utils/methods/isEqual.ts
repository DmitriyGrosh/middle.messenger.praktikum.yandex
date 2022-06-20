const isEqual = (a: unknown, b: unknown) => {
  const pull = new Map();

  const result = isEqualMaster(a, b);

  pull.clear();

  return result;

  function getTypeOf(x: unknown): string {
    return Object.prototype.toString.call(x).slice(8, -1);
  }

  function isPrimitiveType(x: string) {
    return ['Number', 'String', 'NaN', 'Undefined', 'Boolean', 'Null', 'BigInt'].includes(x);
  }

  function isEqualMaster(oldProps: unknown, newProps: unknown) {
    if (pull.has(oldProps)) {
      return pull.get(oldProps) === newProps;
    }

    const typeA = getTypeOf(oldProps);
    const typeB = getTypeOf(newProps);

    if (typeA !== typeB) return false;

    if (isPrimitiveType(typeA)) {
      if (typeA === 'Number') {
        if (Number.isNaN(oldProps as number) || Number.isNaN(newProps as number)) {
          return Number.isNaN(oldProps as number) && Number.isNaN(newProps as number);
        }
      }

      return oldProps === newProps;
    }

    if (oldProps === newProps) return true;

    pull.set(oldProps, newProps);
    pull.set(newProps, oldProps);

    if (typeA === 'Array') {
      if ((oldProps as unknown[]).length !== (newProps as unknown[]).length) return false;

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < (oldProps as unknown[]).length; i++) {
        if (!isEqualMaster((oldProps as unknown[])[i], (newProps as unknown[])[i])) return false;
      }

      return true;
    }
    const keysA = Object.keys(oldProps as Record<string, unknown>);
    const keysB = Object.keys(newProps as Record<string, unknown>);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (!keysB.includes(key)) return false;
    }

    for (const key of keysA) {
      if (
        // eslint-disable-next-line max-len
        !isEqualMaster((oldProps as Record<string, unknown>)[key], (newProps as Record<string, unknown>)[key])) {
        return false;
      }
    }

    return true;
  }
};

export default isEqual;
