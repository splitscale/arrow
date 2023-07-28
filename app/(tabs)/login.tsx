import React, { useState } from 'react';
import { TextInput, Pressable, Alert } from 'react-native';
import { View, Text } from '../../components/Themed';
import { Link } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';

export default function LoginScreen() {
  const { control, handleSubmit } = useForm();
  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  const [showPassword, setShowPassword] = useState(false);

  const onLogInPressed = (data: any) => {
    console.log('Login pressed');
    console.log(data);
  };

  return (
    <View className="flex-1 self-stretch items-center justify-center bg-white dark:bg-black">
      <Text className="text-5xl">Login</Text>
      <Controller
        control={control}
        name="email"
        rules={{
          required: 'Enter email address',
          pattern: { value: emailRegex, message: 'Please enter a valid email address.' },
        }}
        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
          <>
            <TextInput
              className="w-2/3 h-10 rounded-xl border border-gray-200 bg-slate-50 dark:border-white border-radius-20 mb-2 mt-10 px-5"
              value={value}
              onChangeText={(text) => onChange(text)}
              onBlur={onBlur}
              placeholder="Email"
            />
            {error && (
              <Text className="w-7/12 text-red-600">{error.message || 'Error'}</Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{ required: 'Enter password' }}
        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
          <>
            <TextInput
              className="w-2/3 h-10 rounded-xl border border-gray-200 bg-slate-50 dark:border-white border-radius-20 mb-2 mt-3 px-5"
              value={value}
              onChangeText={(text) => onChange(text)}
              onBlur={onBlur}
              placeholder="Password"
              secureTextEntry={!showPassword} 
            />
            {error && (
              <Text className="w-7/12 text-red-600">{error.message || 'Error'}</Text>
            )}
          </>
        )}
      />

      <View className="flex-row items-center mb-5 mt-2 mr-36">
        <Pressable
          className="flex-row items-center"
          onPress={() => setShowPassword((prev) => !prev)}
        >
          <View
            className="w-4 h-4 rounded-2xl border-black mr-2 flex items-center justify-center"
            style={{ borderWidth: 2 }}
          >
            {showPassword && (
              <View className="w-2 h-2 rounded bg-black" />
            )}
          </View>
          <Text>Show Password</Text>
        </Pressable>
      </View>

      <Link href={'/index'} asChild>
        <Pressable className="w-2/3">
          <Text className="text-blue-700 mb-12 text-right">Forgot password?</Text>
        </Pressable>
      </Link>

      <Pressable
        className="w-1/3 bg-green-800 font-bold rounded-md py-2 px-4 mb-5"
        onPress={handleSubmit(onLogInPressed)}
      >
        <Text className="text-white text-center">Login</Text>
      </Pressable>

      <View className="flex-row items-center mb-2">
        <Text className="mt-5">Don't have an account yet?</Text>
      </View>

      <Link href={'/registration'} asChild>
        <Pressable className="ml-2">
          <Text className="text-green-700">Sign up now</Text>
        </Pressable>
      </Link>
    </View>
  );
}
