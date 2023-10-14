export const assert = <T = unknown>(
  x: T,
  message?: string,
): asserts x is NonNullable<T> => {
  if (x === null || x === undefined) {
    throw new Error(message || "assertion failed");
  }
};
