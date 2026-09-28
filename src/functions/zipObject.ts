/** Creates an object from parallel key and value arrays. */
export function zipObject<K extends PropertyKey, V>(keys: readonly K[], values: readonly V[]): Record<K, V> {
    const result = Object.create(null) as Record<K, V>;
    const length = Math.min(keys.length, values.length);

    for (let index = 0; index < length; index += 1) {
        result[keys[index]!] = values[index]!;
    }

    return result;
}
