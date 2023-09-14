import { DuffleRequest } from 'duffle/bin/commonTypes';
import React, { useState } from 'react';
import { Button, Alert, StyleSheet } from 'react-native';
import { View } from '../components/Themed';

const deleteItemInformation = () => {
    const request: DuffleRequest = {
      method: 'DELETE',
      url: 'api/iteminfo/id',
      body: 'object'
    }
    
}

export type DuffleStatus = 'OK' | 'ERROR';

<View>
  <Button
  title='Delete'
  onPress={deleteItemInformation}
  />
</View>