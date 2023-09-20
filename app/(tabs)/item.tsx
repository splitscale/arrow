import React from 'react';
import { View} from 'react-native';
import ItemCard from '../ItemCard';


export default function Item() {

  const userId = '12345'; // replace with the actual user ID
  const ownerId = '12345'; // replace with the actual owner ID

  // image URLs
  const itemImages = [
    "https://img.staticmb.com/mbcontent/images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg",
    "https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house@2x.jpg",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  ];

  const isOwner = userId === ownerId;

  return (
    <View>
      <View className="p-4">
        <ItemCard
          itemName="2 Storey Modern House"
          ownerName="John Doe"
          ownerProfilePic="https://dbkpop.com/wp-content/uploads/2022/06/aespa_girls_karina_teaser_2-2000x1333.jpg"
          coordinates="123.456.789"
          bedType="King Size Bed"
          description="Enjoy. Live. Laugh. Roll."
          amenities="Swimming Pool, Air Conditioned, Free Wi-Fi."
          price="P40,000 Monthly "
          availability="Available"
          houseRules="Contrary to popular belief, Lorem Ipsum is not simply random text."
          itemImages={itemImages}
          isOwner={isOwner} 
          
        />
      </View>
    </View>
  );
}
