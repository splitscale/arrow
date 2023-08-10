import { addListing } from "../../features/addListing";
import { ListingInformation } from "../../types/listingInformation";

describe('Add property listing', () => {
  
    it('should be able to persist the current user', () => {
      const listing: ListingInformation = {
          id: "userid",
          images: "noimage",
          coordinates: {lat: 72, long: 144 },
          name: "Residence",
          bedType: "Single",
          description: "single residence",
          amenities: "???",
          prices: "5000",
          availabilityStatus: "Available",
          houseRules: "No visitors"
      };
  
      expect(addListing(listing)).toBe(listing)
    });
});
  