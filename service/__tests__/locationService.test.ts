import { Location } from '../modules/location/type/Location'
import { LocationService } from "../modules/location/LocationService"
import { LocationWithDistance } from '../modules/location/type/LocationWithDistance'

const Locations: Location[] = 
[
    { id: "key1", coordinates: { lat: 38, long: 144 }},
    { id: "key2", coordinates: { lat: 38, long: 141}},
    { id: "key3", coordinates: { lat: 38, long: 142}},
]
const service = new LocationService(Locations)

describe('LocationService searchListings', () => {

    it('Should be able to return a listing', () => {
        const input = "key1"
        const expected: Location[] = [ { id: 'key1', coordinates: { lat: 38, long: 144 } }]
        expect(service.searchListings(input)).toEqual(expected)
    })

    it('Should return multiple listings', () => {
        const input = "key"
        const expected: Location[] = [
            { id: "key1", coordinates: { lat: 38, long: 144 }},
            { id: "key2", coordinates: { lat: 38, long: 141 }},
            { id: "key3", coordinates: { lat: 38, long: 142 }},
        ]
        expect(service.searchListings(input)).toEqual(expected)
    })

    it('Should return an empty array if there is no listing found', () => {
        const input = "keys"
        const expected: Location[] = []
        expect(service.searchListings(input)).toEqual(expected)
    })
})

describe('LocationService findLocationsNearby', () => {

    it('Should be able to find nearby locations within 200km', () => {
        const center = {lat: 38, long: 144}
        const radius = 200
    
        const expected: LocationWithDistance[] = [
            { id: 'key1', coordinates: { lat: 38, long: 144 }, distance: 0 },
            { id: 'key3', coordinates: { lat: 38, long: 142 }, distance: 175.24222328428712 }
        ]
        expect(service.findLocationsNearby(center, radius)).toEqual(expected)
    })
})