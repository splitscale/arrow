import { Coordinate } from "../../service/modules/location/type/Coordinate"

export interface ListingInformation {
    id: string  //user id
    images: string
    coordinates: Coordinate
    name: string
    bedType: string
    description: string
    amenities: string
    prices: string
    availabilityStatus: string
    houseRules: string
}