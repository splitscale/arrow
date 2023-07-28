import { Locations } from "./Locations";
import { Coordinate } from "./type/Coordinate";
import { Location } from "./type/Location"
import { LocationWithDistance } from "./type/LocationWithDistance";

export class LocationService {
  private locations: Location[]
  constructor() {
    this.locations = Locations
  }

    // text search
  public searchListings(key: string): Location[] {
    const result = this.locations.filter(e => e.id.toLowerCase().includes(key))
    if (result.length === 0) {
        return []
    } else {
      return result
    }
  }
  // gps search. change "center" to either the user or pin coordinate
  public findLocationsNearby(center: Coordinate, radius: number): LocationWithDistance[] {
    const result: LocationWithDistance[] = this.locations.filter((location) => {
      return this.isWithinRadius(center, location.coordinates, radius)
    }).map((location) => {
      return { id: location.id, coordinates: location.coordinates, distance: this.calculateDistance(center, location.coordinates)}
    })
    return result
  }

  private calculateDistance(coord1: Coordinate, coord2: Coordinate){
    const earthRadius = 6371 // in km
    const latDiff = (coord2.lat - coord1.lat) * (Math.PI / 180)
    const lonDiff = (coord2.long - coord1.long) * (Math.PI / 180)

    const a = 
      Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
      Math.cos(coord1.lat * (Math.PI / 180)) *
      Math.cos(coord2.lat * (Math.PI / 180)) *
      Math.sin(lonDiff / 2) *
      Math.sin(lonDiff / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = earthRadius * c
    return distance
  }

  private isWithinRadius(center: Coordinate, target: Coordinate, radius: number): boolean {
    const distance = this.calculateDistance(center, target)
    return distance <= radius
  }
}