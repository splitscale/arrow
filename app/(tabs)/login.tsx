import React from 'react';
import { TextInput, Pressable } from 'react-native';
import { View, Text } from '../../components/Themed';
import { Link } from 'expo-router';

export default function LoginScreen() {
  return (
    <View className="flex-1 self-stretch items-center justify-center bg-white dark:bg-black">
      <Text className=" text-5xl">Login</Text>

      <TextInput 
        className=" w-2/3 h-10 rounded-xl border border-gray-200 bg-slate-50 dark:border-white border-radius-20 mb-3 mt-10 px-5"
        placeholder="Email"
      />

      <TextInput
        className=" w-2/3 h-10 rounded-xl border border-gray-200 bg-slate-50 dark:border-white border-radius-20 mb-2 px-5 "
        placeholder="Password"
        secureTextEntry={true}
      />

      <Link href={'/index'} asChild>
        <Pressable className=" w-2/3">
          <Text className=" text-blue-700 mb-12 text-right">Forgot password?</Text>
          </Pressable>
      </Link>

      <Link href={'/index'} asChild>
        <Pressable className=" w-1/3 bg-green-800 font-bold rounded-md py-2 px-4 mb-5">
          <Text className='text-white text-center'>Login</Text>
        </Pressable>
      </Link>
      
      <View className="flex-row items-center mb-2">
        <Text className=" mt-5">Don't have an account yet?</Text>
      </View>
      
      <Link href={'/registration'} asChild>
        <Pressable className=" ml-2">
        <Text className="text-green-700">Sign up now</Text>
        </Pressable>
      </Link>
    </View>
  );
}
