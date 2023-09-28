import { Coordinate } from "../../../modules/location/type/Coordinate"

export interface ListingInfo {
    userId: string
    images: string
    coordinates: Coordinate
    propertyName: string
    bedType: string
    description: string
    amenities: string
    prices: string
    availabilityStatus: string
    houseRules: string
}