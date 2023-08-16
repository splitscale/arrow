import React from 'react';
import { View, Text } from '../../components/Themed';
import { TextInput, Pressable, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { handleEmailAndPasswordRegistration } from '../../ui-core/handlers/auth/handleEmailAndPasswordRegistration';
import { logger } from '../../utils/logger';

export default function Registration() {
  const { control, handleSubmit, watch } = useForm();
  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  const passwordValidation = watch('password');

  const router = useRouter();

  const registerPress = async (data: any) => {
    const email = data['email'];
    const password = data['password'];
    const firstName = data['firstName'];
    const lastName = data['lastName'];

    logger.info('Registering: ' + email);

    try {
      await handleEmailAndPasswordRegistration(
        email,
        password,
        firstName,
        lastName
      );
      router.push('/home');
    } catch (error) {
      logger.error(error);

      Alert.alert('Oops!', 'Email already in use, please login.', [
        { text: 'retry' },
        {
          onPress: () => router.push('/login'),
          text: 'login',
        },
      ]);
    }
  };

  return (
    <>
      <View className="flex-1 self-stretch items-center justify-center bg-white dark:bg-black">
        <Text className=" text-5xl">Sign Up</Text>

        <Controller
          control={control}
          name="firstName"
          rules={{ required: 'Please enter your First Name' }}
          render={({
            field: { value, onBlur, onChange },
            fieldState: { error },
          }) => (
            <>
              <TextInput
                style={[{ borderColor: error ? 'red' : 'gray' }]}
                className="w-2/3 h-10 rounded-xl border bg-slate-50 border-radius-20 mb-2 px-5 mt-9"
                placeholder="First Name"
                placeholderTextColor="black"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
              {error && (
                <Text className="w-7/12 text-red-600">
                  {error.message ?? 'Error'}
                </Text>
              )}
            </>
          )}
        />

        <Controller
          control={control}
          name="lastName"
          rules={{ required: 'Please enter your Last Name' }}
          render={({
            field: { value, onBlur, onChange },
            fieldState: { error },
          }) => (
            <>
              <TextInput
                style={[{ borderColor: error ? 'red' : 'gray' }]}
                className="w-2/3 h-10 rounded-xl border bg-slate-50 border-radius-20 mb-2 px-5 mt-2"
                placeholder="Last Name"
                placeholderTextColor="black"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
              {error && (
                <Text className="w-7/12 text-red-600">
                  {error.message ?? 'Error'}
                </Text>
              )}
            </>
          )}
        />

        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Email address required',
            pattern: {
              value: emailRegex,
              message: 'Enter a valid email address',
            },
          }}
          render={({
            field: { value, onBlur, onChange },
            fieldState: { error },
          }) => (
            <>
              <TextInput
                style={[{ borderColor: error ? 'red' : 'gray' }]}
                className="w-2/3 h-10 rounded-xl border bg-slate-50 border-radius-20 mb-2 px-5 mt-2"
                placeholder="Email"
                placeholderTextColor="black"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
              {error && (
                <Text className="w-7/12 text-red-600">
                  {error.message ?? 'Error'}
                </Text>
              )}
            </>
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          }}
          render={({
            field: { value, onBlur, onChange },
            fieldState: { error },
          }) => (
            <>
              <TextInput
                style={[{ borderColor: error ? 'red' : 'gray' }]}
                className="w-2/3 h-10 rounded-xl border bg-slate-50 border-radius-20 mb-2 px-5 mt-2"
                placeholder="Password"
                placeholderTextColor="black"
                secureTextEntry={true}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
              {error && (
                <Text className="w-7/12 text-red-600">
                  {error.message ?? 'Error'}
                </Text>
              )}
            </>
          )}
        />

        <Controller
          control={control}
          name="password-repeat"
          rules={{
            required: 'Confirm your password',
            validate: (value) =>
              value === passwordValidation || 'Passwords do not match',
          }}
          render={({
            field: { value, onBlur, onChange },
            fieldState: { error },
          }) => (
            <>
              <TextInput
                style={[{ borderColor: error ? 'red' : 'gray' }]}
                className="w-2/3 h-10 rounded-xl border bg-slate-50 border-radius-20 mb-2 px-5 mt-2"
                placeholder="Confirm Password"
                placeholderTextColor="black"
                secureTextEntry={true}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
              {error && (
                <Text className="w-7/12 text-red-600">
                  {error.message ?? 'Error'}
                </Text>
              )}
            </>
          )}
        />

        <Pressable
          className="w-1/3 bg-green-800 font-bold rounded-md py-2 px-4 mb-5 mt-8"
          onPress={handleSubmit(registerPress)}
        >
          <Text className="text-white text-center">Sign Up</Text>
        </Pressable>

        <View className="flex-row items-center mb-2">
          <Text className=" mt-5">Already have an account?</Text>
        </View>

        <Link href={'/login'} asChild>
          <Pressable className="ml-2">
            <Text className="text-green-700">Login here</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}
