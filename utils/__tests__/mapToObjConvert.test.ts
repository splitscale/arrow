import { convertMapToObject } from '../convertMapToObject';

describe('mapToObject', () => {
  it('should convert a map to an object', () => {
    const myMap = new Map<string, any>();
    myMap.set('name', 'John');
    myMap.set('age', 30);
    myMap.set('location', 'Iloilo');

    const expectedResult = {
      name: 'John',
      age: 30,
      location: 'Iloilo',
    };

    const result = convertMapToObject<{
      name: string;
      age: number;
      location: string;
    }>(myMap);

    expect(result).toEqual(expectedResult);
  });
});
