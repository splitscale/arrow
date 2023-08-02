import { TouchableOpacity, Image } from 'react-native';
import { Text, View } from '../components/Themed';

export default function EditButton({location,userName, profilePic}: {location?: string, userName?: string, profilePic?: string}) {
  return (
    <TouchableOpacity
    className='h-8 w-24 justify-between align-center flex-col mb-4 py-1 px-7 rounded-xl drop-shadow-md bg-green-400 shadow-lg shadow-black dark:shadow-white dark:bg-[#12e22a]'
    activeOpacity={0.5}
  >
         <Text className='ml-1 text-sm font-bold'>
            EDIT
          </Text>
  </TouchableOpacity>
  );
}