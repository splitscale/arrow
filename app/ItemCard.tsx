import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Image, Pressable, FlatList, Dimensions } from 'react-native';
import { View, Text } from '../components/Themed';

const windowWidth = Dimensions.get('window').width;

export default function ItemCard({
  itemName,
  ownerName,
  ownerProfilePic,
  coordinates,
  bedType,
  description,
  amenities,
  price,
  availability,
  houseRules,
  itemImages,
  isOwner,
  
}: {
  itemName: string;
  ownerName: string;
  ownerProfilePic: string;
  coordinates: string;
  bedType: string;
  description: string;
  amenities: string;
  price: string;
  availability: string;
  houseRules: string;
  itemImages: string[];
  isOwner: boolean;
}) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleScroll = (event: any) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const imageIndex = Math.round(xOffset / windowWidth);
    setCurrentImage(imageIndex);
  };

  return (

    <ScrollView >
      <View className="bg-white dark:bg-black">
        <Text className="text-3xl font-bold mb-2 mt-3 ml-5 ">{itemName}</Text>
        <View className="flex-row items-center mb-2 ml-5">
          <Image
          source={{ uri: ownerProfilePic }}
          resizeMode='contain'
          className='w-10 h-10 rounded-full mr-2 mb-2'
          />
          <Text className='ml-1 text-lg font-bold mb-2'>{ownerName}</Text>
          </View>
          
          <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          data={itemImages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
          
          <TouchableOpacity onPress={() => setCurrentImage(itemImages.indexOf(item))}>
            <Image
              source={{ uri: item }}
              resizeMode="cover"
              className=" w-screen h-56 mb-2 ml-5"
            />
          </TouchableOpacity>
        )}
      />
      
      <View className= "ml-5 mb">
      <Text className="text-lg font-semibold">Bed Type:</Text>
        <Text>{bedType}</Text>

        <Text className="text-lg font-semibold">Description:</Text>
        <Text>{description}</Text>

        <Text className="text-lg font-semibold">Amenities:</Text>
        <Text>{amenities}</Text>

        <Text className="text-lg font-semibold">Price:</Text>
        <Text>{price}</Text>

        <Text className="text-lg font-semibold">Availability:</Text>
        <Text>{availability}</Text>

        <Text className="text-lg font-semibold">House Rules:</Text>
        <Text>{houseRules}</Text>
      </View>
      
      {isOwner ? (
          <Pressable
            className="w-1/3 bg-sky-800 font-bold rounded-md py-2 px-4 mt-5 mb-10 mx-auto"
            onPress={() => {
              // logic
            }}
          >
            <Text className="text-white text-center">Edit</Text>
          </Pressable>
        ) : (
          <Pressable
            className="w-1/3 bg-green-800 font-bold rounded-md py-2 px-4 mt-5 mb-10 mx-auto"
            onPress={() => {
              // logic
            }}
          >
            <Text className="text-white text-center">Reserve</Text>
          </Pressable>
        )}
      </View>
    </ScrollView>
  );
}
