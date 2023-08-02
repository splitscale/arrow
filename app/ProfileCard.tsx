import { TouchableOpacity, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import EditButton from './EditButton';

export default function ProfileCard({location,userName, profilePic,fullName,phoneNumber,email}: {email:string,phoneNumber:string,fullName:string,location: string, userName: string, profilePic: string}) {
  return (
    <View
      className='h-auto w-auto justify-center align-center flex-col mb-4 p-4  drop-shadow-md bg-neutral-100 shadow-lg shadow-black dark:shadow-white dark:bg-[#202020]'
     
    >
      
      <View className='bg-transparent flex-row justify-center'>
        <Image
          source={{
            uri: profilePic
          }}
          resizeMode='contain'
          className='w-24 h-24 rounded-full'
        />
        
        
      </View>
    

      <View className='py-4 ml-2 bg-transparent flex-row justify-center'>
          <EditButton/>
        </View>

      <View className='ml-2 bg-transparent flex-1 justify-center'>
          <Text className='ml-1 text-lg font-bold' numberOfLines={1}>
            Username
          </Text>

          <View className='px-1 bg-transparent flex-1'>
            <Text className='text-lg text-neutral-700/90 dark:text-neutral-200/90' numberOfLines={1}>
            {userName}
            </Text>
          </View>    
        </View>
        <View className='py-4 ml-2 bg-transparent flex-1 justify-center'>
          <Text className='ml-1 text-lg font-bold' numberOfLines={1}>
            Fullname
          </Text>

          <View className='px-1 bg-transparent flex-1'>
            <Text className='text-lg text-neutral-700/90 dark:text-neutral-200/90' numberOfLines={1}>
              {fullName}
            </Text>
          </View>
          
          
        </View>

        <View className='py-4 ml-2 bg-transparent flex-1 justify-center'>
          <Text className='ml-1 text-lg font-bold' numberOfLines={1}>
            Email
          </Text>

          <View className='px-1 bg-transparent flex-1'>
            <Text className='text-lg text-neutral-700/90 dark:text-neutral-200/90' numberOfLines={1}>
              {email}
            </Text>
          </View>
        </View>

        <View className='py-4 ml-2 bg-transparent flex-1 justify-center'>
          <Text className='ml-1 text-lg font-bold' numberOfLines={1}>
            Location
          </Text>

          <View className='px-1 bg-transparent flex-1'>
            <Text className='text-lg text-neutral-700/90 dark:text-neutral-200/90' numberOfLines={1}>
              {location}
            </Text>
          </View>
        </View>
        <View className='py-4 ml-2 bg-transparent flex-1 justify-center'>
          <Text className='ml-1 text-lg font-bold' numberOfLines={1}>
            Phone Number
          </Text>

          <View className='px-1 bg-transparent flex-1'>
            <Text className='text-lg text-neutral-700/90 dark:text-neutral-200/90' numberOfLines={1}>
              {phoneNumber}
            </Text>
          </View>
        </View>
    </View>
  );
}