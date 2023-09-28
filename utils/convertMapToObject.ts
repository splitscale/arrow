export function convertMapToObject<T>(map: Map<string, any>): T {
  const obj: any = {};

  for (const [key, value] of map.entries()) {
    obj[key] = value ?? null;
  }

  return obj as T;
}
