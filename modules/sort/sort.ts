export const sortLocations = (locations: {distance: number}[]) => {
    const result = locations.sort((a, b) => {
        return a.distance - b.distance
      })
      return result
}