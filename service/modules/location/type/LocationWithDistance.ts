import { Coordinate } from "./Coordinate";

export interface LocationWithDistance {
    id: string,
    coordinates: Coordinate
    distance: number
}