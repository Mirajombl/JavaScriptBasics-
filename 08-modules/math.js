/**
 * This is an example module file to demonstrate exports.
 *
 * -------------------------------------------------------------------
 * 1. NAMED EXPORTS
 * -------------------------------------------------------------------
 * You can export multiple things from a single file by adding `export`
 * before the declaration.
 */

export const PI = 3.14159;

export function calculateArea(radius) {
  return PI * radius * radius;
}

/**
 * -------------------------------------------------------------------
 * 2. DEFAULT EXPORT
 * -------------------------------------------------------------------
 * A file can have ONLY ONE default export.
 * Usually used when a file primarily exports one main class or function.
 */

export default class Calculator {
  constructor() {
    this.value = 0;
  }

  add(num) {
    this.value += num;
    return this.value;
  }
}
