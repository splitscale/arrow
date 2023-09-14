import React, { useState } from 'react';
import { View, Text } from '../components/Themed';
import { Pressable, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { handleEmailAndPasswordRegistration } from '../ui-core/handlers/auth/handleEmailAndPasswordRegistration';
import { logger } from '../utils/logger';
import { Id } from '@reduxjs/toolkit/dist/tsHelpers';

const router = useRouter();
const { control, handleSubmit, watch} = useForm();

export default function DeleteItemInfo() {
  const deletePress = async (Id:any) => {
    const url = Id;
    fetch(url, { method: 'DELETE' }).then((alert) => {
      if (!alert.ok) {
        throw new Error('Error');
      }
    })
    .catch((e) => {
      console.log(e);
    })
  }
  return (
    <View>
      <Pressable
        className='border border-dashed border-amber-200'
        onPress={handleSubmit(deletePress)}
      >
      </Pressable>
    </View>
  )
}
