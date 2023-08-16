export function convertPartialToObject<T>(partialObj: Partial<T>): T {
  const defaultObj = {} as Partial<T>;
  return { ...defaultObj, ...partialObj } as T;
}
