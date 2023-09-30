import { ScrollView, TouchableOpacity, Image } from 'react-native';

import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  const location: string = 'location';
  const aptName: string = 'title';
  const aptDetails: string = 'details';
  const aptPic: string = 'https://picsum.photos/1920/1080';

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* item card container*/}
        <View className="p-4 flex-1">
          {/* pressable image and description */}
          <TouchableOpacity
            className="h-auto w-100 justify-between align-center flex-col mb-4 p-4 rounded-xl drop-shadow-md bg-neutral-200 shadow-lg shadow-black dark:shadow-white dark:bg-[#202020]"
            activeOpacity={0.5}
          >
            <View className="bg-transparent flex-row">
              {/* profile picture */}

              <View className="ml-2 bg-transparent flex-1 justify-center align-center">
                <Text className="ml-1 text-lg font-bold" numberOfLines={1}>
                  {aptName}
                </Text>
                <View className="bg-transparent flex-row">
                  <Text
                    className="text-xs text-neutral-700/90 dark:text-neutral-200/90"
                    numberOfLines={1}
                  >
                    {location}
                  </Text>
                </View>
              </View>
            </View>

            <View className="flex mt-3 bg-transparent items-center">
              <Image
                source={{
                  uri: aptPic,
                }}
                resizeMode="contain"
                className="w-full h-48 py-8 rounded-xl"
              />
            </View>

            <View className="bg-transparent mt-3">
              <Text
                className="text-sm text-neutral-700/90 dark:text-neutral-200/90 "
                numberOfLines={3}
              >
                {aptDetails}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
