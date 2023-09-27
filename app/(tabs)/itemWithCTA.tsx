import React, { useState } from 'react';
import {
  FlatList,
  View,
  Image,
  Dimensions,
  Animated,
  ScrollView,
  TextComponent,
  Text,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function ItemWithCTA() {
  const itemImages = [
    'https://img.staticmb.com/mbcontent/images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg',
    'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house@2x.jpg',
    'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house@2x.jpg',
    'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house@2x.jpg',
    'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house@2x.jpg',
    'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house@2x.jpg',
    'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house@2x.jpg',
    'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house@2x.jpg',
    'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house@2x.jpg',
    'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house@2x.jpg',
    'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house@2x.jpg',
    'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house@2x.jpg',
    'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house@2x.jpg',
    'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house@2x.jpg',
    'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house@2x.jpg',
    'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house@2x.jpg',
    'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house@2x.jpg',
    'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house@2x.jpg',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  ];

  // Initialize scrollX as an Animated.ValueS
  const scrollX = new Animated.Value(0);

  return (
    <View className="bg-white dark:bg-black">
      <ScrollView>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true} // Snap to the width of the screen
          decelerationRate="normal" // Use fast deceleration for snappier effect
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16} // Adjust the throttle as needed
        >
          {itemImages.map((item, index) => (
            <Image
              key={index}
              source={{ uri: item }}
              resizeMode="cover"
              style={{
                width: windowWidth,
                height: 400,
              }}
            />
          ))}
        </ScrollView>

        {/* scroll progress indicator */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 8,
          }}
        >
          {itemImages.map((_, index) => {
            // Calculate the opacity based on scroll position
            const opacity = scrollX.interpolate({
              inputRange: [
                (index - 1) * windowWidth,
                index * windowWidth,
                (index + 1) * windowWidth,
              ],
              outputRange: [0.5, 1, 0.5],
              extrapolate: 'clamp',
            });

            // Set the active color to green
            const backgroundColor = opacity.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: ['grey', 'grey', 'green'],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={index}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 100,
                  backgroundColor, // Apply the calculated background color
                  marginHorizontal: 3,
                  opacity, // Apply the calculated opacity
                }}
              />
            );
          })}
        </View>

        {/* other information */}
        <View className="space-y-3 mx-3 mt-2">
          <View className="flex flex-col space-y-2">
            <Text className="text-3xl font-semibold color-white">
              {'Big Room in CPU'}
            </Text>

            <View className="flex flex-col px-3 py-1 border-[1px] border-solid border-slate-700 rounded-md">
              <View className="flex flex-row justify-between py-1 space-x-2">
                <Text className="text-sm color-white">
                  {'lopez jaena street, jaro, iloilo'}
                </Text>
                <Text className="text-sm color-white">{'>'}</Text>
              </View>
            </View>
          </View>

          {/* property info with icons */}
          <View>
            <Text className="text-lg font-medium color-white">Features</Text>

            <View className="flex flex-col px-3 py-2 border-[1px] border-solid border-slate-700 rounded-md">
              <View className="flex flex-row py-1 space-x-2">
                <Text className="text-sm color-white">✅</Text>
                <Text className="text-sm color-white">No curfew</Text>
              </View>
              <View className="flex flex-row py-1 space-x-2">
                <Text className="text-sm color-white">✅</Text>
                <Text className="text-sm color-white">Free Wifi</Text>
              </View>
              <View className="flex flex-row py-1 space-x-2">
                <Text className="text-sm color-white">✅</Text>
                <Text className="text-sm color-white">Visitors Allowed</Text>
              </View>
            </View>
          </View>

          {/* inclusions */}
          <View>
            <Text className="text-lg font-medium color-white">Inclusions</Text>

            <View className="flex flex-col px-3 py-2 border-[1px] border-solid border-slate-700 rounded-md">
              <View className="flex flex-row py-1 space-x-2">
                <Text className="text-sm color-white">-</Text>
                <Text className="text-sm color-white">
                  Bed with foam & pillows
                </Text>
              </View>
              <View className="flex flex-row py-1 space-x-2">
                <Text className="text-sm color-white">-</Text>
                <Text className="text-sm color-white">Eating utensils</Text>
              </View>
              <View className="flex flex-row py-1 space-x-2">
                <Text className="text-sm color-white">-</Text>
                <Text className="text-sm color-white">Fan room</Text>
              </View>
            </View>
          </View>

          {/* More Info */}
          <View>
            <Text className="text-lg font-medium color-white">House Rules</Text>

            <View className="flex flex-col px-3 py-2 border-[1px] border-solid border-slate-700 rounded-md">
              <Text className="text-sm color-white">
                Bawal maarte wala tubig kung aga
              </Text>
            </View>
          </View>

          {/* pricing info */}
          <View>
            <Text className="text-lg font-medium color-white">Price</Text>

            <View className="flex flex-col px-3 py-2 border-[1px] border-solid border-slate-700 rounded-md">
              <View className="flex flex-row justify-between py-1">
                <Text className="text-sm color-white">Space</Text>
                <Text className="text-sm color-white font-bold">P5,000</Text>
              </View>
              <View className="flex flex-row justify-between py-1">
                <Text className="text-sm color-white">Electricity</Text>
                <Text className="text-sm color-white font-bold">
                  P15.50/kwh
                </Text>
              </View>
              <View className="flex flex-row justify-between py-1">
                <Text className="text-sm color-white">Wifi</Text>
                <Text className="text-sm color-white font-bold">P300</Text>
              </View>
            </View>
          </View>

          {/* CTA Call To Action button */}
          <View className="flex flex-row justify-center mb-3 bg-[#00ff00] rounded-full">
            <Text className="text-md my-3 color-black font-semibold text-xl">
              Call Now
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
