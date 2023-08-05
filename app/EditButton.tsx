import { TouchableOpacity, Image, Modal, Alert, Pressable, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { useState } from 'react';
import Homecards from './homecards';

export default function EditButton({location,userName, profilePic}: {location?: string, userName?: string, profilePic?: string}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View className='bg-transparent flex-row justify-center'>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View >
       
          <View className='h-full w-100 flex-col mb-4 py-12 px-4 rounded-xl drop-shadow-md bg-neutral-200 shadow-lg shadow-black dark:shadow-white dark:bg-[#202020]' >
          <TouchableOpacity className=' h-10 w-24 justify-center align-center flex-col mb-4 py-1 px-7 rounded-xl drop-shadow-m bg-red-400 shadow-lg shadow-black dark:shadow-white dark:bg-[#202020]' 
              onPress={() => setModalVisible(!modalVisible)}>
              <Text>EXIT</Text>
            </TouchableOpacity>
          
          <Text>Username</Text>
          <TextInput
            className='w-2/3 h-10 rounded-xl border bg-slate-50 border-radius-20 mb-2 px-5 mt-2'
            placeholder='Juan'
            placeholderTextColor='black'
          />
          <Text>Full Name</Text>
          <TextInput
            className='w-2/3 h-10 rounded-xl border bg-slate-50 border-radius-20 mb-2 px-5 mt-2'
            placeholder='Juan Dela Cruz'
            placeholderTextColor='black'
          />

          <Text>Email</Text>
          <TextInput
            className='w-2/3 h-10 rounded-xl border bg-slate-50 border-radius-20 mb-2 px-5 mt-2'
            placeholder='juandelacruz@gmail.com'
            placeholderTextColor='black'
          /> 

          <Text>Location</Text>
          <TextInput
            className='w-2/3 h-10 rounded-xl border bg-slate-50 border-radius-20 mb-2 px-5 mt-2'
            placeholder='Barotac Nuevo'
            placeholderTextColor='black'
          /> 
          
          <Text>Phone Number</Text>
          <TextInput
            className='w-2/3 h-10 rounded-xl border bg-slate-50 border-radius-20 mb-2 px-5 mt-2'
            placeholder='09914567891'
            placeholderTextColor='black'
          /> 
            <TouchableOpacity className='h-10 w-24 justify-center align-center flex-col mb-4 py-1 px-7 rounded-xl drop-shadow-md bg-green-400 shadow-lg shadow-black dark:shadow-white dark:bg-[#12e22a]' 
              onPress={() => setModalVisible(!modalVisible)}>
              <Text>SAVE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      

    <TouchableOpacity
    className='h-8 w-24 justify-between align-center flex-col mb-4 py-1 px-7 rounded-xl drop-shadow-md bg-green-400 shadow-lg shadow-black dark:shadow-white dark:bg-[#12e22a]'
    activeOpacity={0.5} onPress={() => setModalVisible(true)}>
         <Text className='ml-1 text-sm font-bold'>
            EDIT
          </Text>
  </TouchableOpacity>
    </View>
  );
}