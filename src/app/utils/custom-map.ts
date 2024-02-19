export class CustomMap<K, V> {
  #map = new Map<K, V>();

  constructor(private entries: [K, V][], private defaultValue = undefined) {
    this.entries.forEach(([key, value]) => this.#map.set(key, value));
  }

  get(key: K): V | undefined {
    return this.#map.has(key) ? this.#map.get(key) : this.defaultValue;
  }
}
