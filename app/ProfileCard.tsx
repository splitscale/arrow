import { TouchableOpacity, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import EditButton from './EditButton';

export default function ProfileCard({location,userName, profilePic}: {location: string, userName: string, profilePic: string}) {
  return (
    <View
      className='h-auto w-auto justify-between align-center flex-col mb-4 p-4  drop-shadow-md bg-neutral-200 shadow-lg shadow-black dark:shadow-white dark:bg-[#202020]'
     
    >
      <View className='bg-transparent flex-row'>
        <Image
          source={{
            uri: profilePic
          }}
          resizeMode='contain'
          className='w-12 h-12 rounded-full'
        />
        
        <View className='ml-2 bg-transparent flex-1 justify-center align-center'>
          <Text className='ml-1 text-lg font-bold' numberOfLines={1}>
            {userName}
          </Text>
          <View className='px-1 bg-transparent flex-row'>
            <Text className='text-xs text-neutral-700/90 dark:text-neutral-200/90' numberOfLines={1}>
              {location}
            </Text>
          </View>
        </View>
      </View>
      <View className='p-2 justify-end  bg-neutral-200'>

    <EditButton/>
      </View>
    </View>
  );
}