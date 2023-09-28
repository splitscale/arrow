import { ObjectWithIdWrapperWithMetadata } from '../../service/repository/repositoryTypes';
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

    console.log([expectedResult, result]);

    expect(result).toEqual(expectedResult);
  });

  it('should convert a map to an object with type wrapper', () => {
    interface TestUser {
      name: string;
      age: number;
      location: string;
    }

    const myMap = new Map<string, any>();
    myMap.set('id', 'some-id');
    myMap.set('data', { name: 'John', age: 30, location: 'Iloilo' });
    myMap.set('metadata', 'some-metadata');

    const expectedResult: ObjectWithIdWrapperWithMetadata<
      TestUser,
      string,
      any
    > = {
      id: 'some-id',
      data: { name: 'John', age: 30, location: 'Iloilo' },
      metadata: 'some-metadata',
    };

    const result =
      convertMapToObject<
        ObjectWithIdWrapperWithMetadata<TestUser, string, any>
      >(myMap);

    console.log([expectedResult, result]);

    expect(result).toEqual(expectedResult);
  });
});
