import React from 'react';
import { View, Text } from '../../components/Themed';
import { TextInput, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Registration() {
  return (
    <>
    <View className="flex-1 self-stretch justify-center bg-white dark:bg-black">
      <Text className='ml-7 mb-5 text-3xl'>
        Sign Up
      </Text>
      <View className='items-center'>
        <TextInput
          className='pl-2 rounded-lg bg-slate-300 w-10/12 m-3 border border-black dark:border-white h-10 justify-center'
          placeholder='First Name'
          placeholderTextColor='black'
        /> 

        <TextInput
          className='pl-2 rounded-lg bg-slate-300 w-10/12 m-3 border border-black dark:border-white h-10 justify-center'
          placeholder='Last Name'
          placeholderTextColor='black'
        /> 

        <TextInput
          className='pl-2 rounded-lg bg-slate-300 w-10/12 m-3 border border-black dark:border-white h-10 justify-center'
          placeholder='Email'
          placeholderTextColor='black'
        /> 

        <TextInput
          className='pl-2 rounded-lg bg-slate-300 w-10/12 m-3 border border-black dark:border-white h-10 justify-center'
          placeholder='Password'
          placeholderTextColor='black'
          secureTextEntry={true}
        /> 

        <TextInput
          className='pl-2 rounded-lg bg-slate-300 w-10/12 m-3 border border-black dark:border-white h-10 justify-center'
          placeholder='Re-enter Password'
          placeholderTextColor='black'
          secureTextEntry={true}
        /> 

        <Link href={'/homescreen'} asChild>
          <Pressable className='mt-7 w-4/12 h-9 items-center justify-center bg-green-800 rounded-lg'>
            <Text className='text-white text-base'>Sign Up</Text>
          </Pressable>
        </Link>
      </View>
    </View>
    </>
  )
}