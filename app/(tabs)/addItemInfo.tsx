import React from 'react';
import { View, Text } from '../../components/Themed';
import { TextInput, Pressable, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { logger } from '../../utils/logger';
import { useColorScheme, ScrollView } from 'react-native';

import { getImageLibrary } from '../../ui-core/dataAccess/media/getImageLibrary';

import * as ImagePicker from 'expo-image-picker';

export default function AddItemInfo() {
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const { control, handleSubmit } = useForm();
  const router = useRouter();
  const colorScheme = useColorScheme();

  const registerPress = async (data: any) => {
    const aptName = data['aptName'];
    const location = data['location'];
    const bedType = data['bedType'];
    const aptPrice = data['aptPrice'];
    const description = data['description'];
    const amenities = data['amenities'];
    const houseRules = data['houseRules'];
    const availStatus = data['availStatus'];

    logger.info('Adding apartment: ' + aptName);

    try {
      // insert logic here
      router.push('/home');
    } catch (error) {
      logger.error(error);
      //insert logic here
    }
  };

  const cancelPress = async () => {
    router.back();
  };

  return (
    <View className='items-center h-full'>

      <View className='w-full h-auto mt-1 mb-2 bg-transparent'>
        <Text className="ml-5 text-3xl">Add your place</Text>
      </View>
      
      <ScrollView className='w-[95%]'>
        <View className='items-center justify-center'>

          <Pressable
            className="border border-slate-500 max-w-[330px] w-full h-[180px] my-2 items-center justify-center bg-neutral-200 dark:bg-[#202020] rounded-lg"
            onPress={async () => {
              if (!status?.granted) await requestPermission();

              const res = await getImageLibrary();

              if (res.didCancel) {
                console.log('Image selection cancelled');
              }

              console.log('Medias: ', res.medias);
            }}
          >
            <Image
              source={
                colorScheme === 'dark' ? require('../../assets/images/upload-image-white.png') : require('../../assets/images/upload-image.png')
              }
              resizeMode='contain'
              className='w-16 h-16'
            />
            <Text className=''>
              Upload image here
            </Text>
          </Pressable>


          <Controller
            control={control}
            name="aptName"
            rules={{ required: 'Please enter the apartment name' }}
            render={({
              field: { value, onBlur, onChange },
              fieldState: { error },
            }) => (
              <>
                <TextInput
                  style={[{ borderColor: error ? 'red' : 'gray' }]}
                  className="w-[85%] h-10 rounded-md border bg-slate-50 border-radius-20 mb-3 px-5 mt-4"
                  placeholder="Apartment Name"
                  placeholderTextColor="black"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                {error && (
                  <Text className="mt-[-12px] mb-1 text-red-600">
                    {error.message ?? 'Error'}
                  </Text>
                )}
              </>
            )}
          />

          <Controller
            control={control}
            name="location"
            rules={{ required: 'Please enter the apartment location/coordinates' }}
            render={({
              field: { value, onBlur, onChange },
              fieldState: { error },
            }) => (
              <>
                <TextInput
                  style={[{ borderColor: error ? 'red' : 'gray' }]}
                  className="w-[85%] h-10 rounded-md border bg-slate-50 border-radius-20 mb-3 px-4"
                  placeholder="Apartment Location / Coordinates"
                  placeholderTextColor="black"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                {error && (
                  <Text className="mt-[-12px] mb-1 text-red-600">
                    {error.message ?? 'Error'}
                  </Text>
                )}
              </>
            )}
          />

          <Controller
            control={control}
            name="bedType"
            rules={{ required: 'Please enter the bed type' }}
            render={({
              field: { value, onBlur, onChange },
              fieldState: { error },
            }) => (
              <>
                <TextInput
                  style={[{ borderColor: error ? 'red' : 'gray' }]}
                  className="w-[85%] h-10 rounded-md border bg-slate-50 border-radius-20 mb-3 px-4"
                  placeholder="Bed Type"
                  placeholderTextColor="black"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                {error && (
                  <Text className="mt-[-12px] mb-1 text-red-600">
                    {error.message ?? 'Error'}
                  </Text>
                )}
              </>
            )}
          />

          <Controller
            control={control}
            name="aptPrice"
            rules={{ required: 'Please enter the apartment price (in Php)' }}
            render={({
              field: { value, onBlur, onChange },
              fieldState: { error },
            }) => (
              <>
                <TextInput
                  style={[{ borderColor: error ? 'red' : 'gray' }]}
                  className="w-[85%] h-10 rounded-md border bg-slate-50 border-radius-20 mb-3 px-4"
                  placeholder="Price (in Php)"
                  placeholderTextColor="black"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                {error && (
                  <Text className="mt-[-12px] mb-1 text-red-600">
                    {error.message ?? 'Error'}
                  </Text>
                )}
              </>
            )}
          />

          <Controller
            control={control}
            name="description"
            rules={{ required: 'Please enter the apartment description' }}
            render={({
              field: { value, onBlur, onChange },
              fieldState: { error },
            }) => (
              <>
                <TextInput
                  style={[{ borderColor: error ? 'red' : 'gray' }]}
                  className="w-[85%] h-[100px] rounded-md border bg-slate-50 border-radius-20 mb-3 px-4 pt-4"
                  placeholder="Description"
                  placeholderTextColor="black"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  multiline={true}
                  textAlignVertical={'top'}
                />
                {error && (
                  <Text className="mt-[-12px] mb-1 text-red-600">
                    {error.message ?? 'Error'}
                  </Text>
                )}
              </>
            )}
          />

          <Controller
            control={control}
            name="amenities"
            rules={{ required: 'Please enter the apartment amenities' }}
            render={({
              field: { value, onBlur, onChange },
              fieldState: { error },
            }) => (
              <>
                <TextInput
                  style={[{ borderColor: error ? 'red' : 'gray' }]}
                  className="w-[85%] h-[100px] rounded-md border bg-slate-50 border-radius-20 mb-3 px-4 pt-4"
                  placeholder="Amenities"
                  placeholderTextColor="black"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  multiline={true}
                  textAlignVertical={'top'}
                />
                {error && (
                  <Text className="mt-[-12px] mb-1 text-red-600">
                    {error.message ?? 'Error'}
                  </Text>
                )}
              </>
            )}
          />

          <Controller
            control={control}
            name="houseRules"
            rules={{ required: 'Please specify the apartment house rules' }}
            render={({
              field: { value, onBlur, onChange },
              fieldState: { error },
            }) => (
              <>
                <TextInput
                  style={[{ borderColor: error ? 'red' : 'gray' }]}
                  className="w-[85%] h-[100px] rounded-md border bg-slate-50 border-radius-20 mb-3 px-4 pt-4"
                  placeholder="House Rules"
                  placeholderTextColor="black"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  multiline={true}
                  textAlignVertical={'top'}
                />
                {error && (
                  <Text className="mt-[-12px] mb-1 text-red-600">
                    {error.message ?? 'Error'}
                  </Text>
                )}
              </>
            )}
          />

          <Controller
            control={control}
            name="availStatus"
            rules={{ required: 'Please specify the availability status' }}
            render={({
              field: { value, onBlur, onChange },
              fieldState: { error },
            }) => (
              <>
                <TextInput
                  style={[{ borderColor: error ? 'red' : 'gray' }]}
                  className="w-[85%] h-10 rounded-md border bg-slate-50 border-radius-20 mb-3 px-4"
                  placeholder="Availability Status"
                  placeholderTextColor="black"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                {error && (
                  <Text className="mt-[-12px] mb-1 text-red-600">
                    {error.message ?? 'Error'}
                  </Text>
                )}
              </>
            )}
          />
        </View>
      </ScrollView>

      <View className='my-2 flex-row items-center justify-center bg-transparent'>
        <Pressable
          className="border border-black rounded-md justify-center bg-green-600 w-40 h-12 mr-10"
          onPress={handleSubmit(registerPress)}
        >
          <Text className="text-center text-lg">Add Place</Text>
        </Pressable>

        <Pressable
          className="border border-black rounded-md justify-center bg-red-500 w-12 h-12"
          onPress= {cancelPress}
        >
          <Text className="text-center text-xl">X</Text>
        </Pressable>
      </View>
    </View>
  );
}