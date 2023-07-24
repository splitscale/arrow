export interface Coordinate {
    lat: number,
    long: number
  }
  
export interface Location {
    id: string,
    coordinates: Coordinate
}