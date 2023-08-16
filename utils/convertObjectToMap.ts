export function convertObjectToMap<T extends object>(obj: T): Map<string, any> {
  const objMap = new Map<string, any>();

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      objMap.set(key, obj[key]);
    }
  }

  return objMap;
}
