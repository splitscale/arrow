import { LocationWithDistance } from "../location/type/LocationWithDistance"

export class LocationSort{

  public asc(locations: LocationWithDistance[]): LocationWithDistance[] {
    const result = locations.sort((a, b) => {
      return a.distance - b.distance
    })
    return result
  }

  public desc(locations: LocationWithDistance[]): LocationWithDistance[] {
    const result = locations.sort((a, b) => {
      return b.distance - a.distance
    })
    return result
  }
}