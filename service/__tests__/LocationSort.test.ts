import { LocationWithDistance } from "../modules/location/type/LocationWithDistance";
import { LocationSort } from "../modules/sort/LocationSort";

const Locations: LocationWithDistance[] = 
[
    { id: "key1", coordinates: { lat: 38, long: 144}, distance: 100 },
    { id: "key2", coordinates: { lat: 38, long: 141}, distance: 40},
    { id: "key3", coordinates: { lat: 38, long: 142}, distance: 150},
]

const sort = new LocationSort()

describe('LocationSort', () => {

    it('Should be able to sort locations in ascending distance', () => {
        const expected: LocationWithDistance[] = [
            { id: "key2", coordinates: { lat: 38, long: 141}, distance: 40},
            { id: "key1", coordinates: { lat: 38, long: 144}, distance: 100 },
            { id: "key3", coordinates: { lat: 38, long: 142}, distance: 150},
        ]
        expect(sort.asc(Locations)).toEqual(expected)
    })

    it('Should be able to sort locations in descending distance', () => {
        const expected: LocationWithDistance[] = [
            { id: "key3", coordinates: { lat: 38, long: 142}, distance: 150},
            { id: "key1", coordinates: { lat: 38, long: 144}, distance: 100 },
            { id: "key2", coordinates: { lat: 38, long: 141}, distance: 40},
        ]
        expect(sort.desc(Locations)).toEqual(expected)
    })
})