import { ImageBackground, ScrollView } from 'react-native';

import { Text, View } from '../../components/Themed';
import ProfileCard from '../ProfileCard';
import Homecards from '../homecards';
import { useState } from 'react';

export default function Profile() {
  const [username,setUsername] = useState('Juan')
  const [email,setEmail] = useState('juandelacruz@gmail.com')
  const [fullName,setfullName] = useState('Juan Dela Cruz')
  const [phoneNumber,setPhoneNumber] = useState('09914567891')
  const [location,setLocation] = useState('Barotac Nuevo')
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='p-4 flex-1'> 
          
          <ProfileCard
            userName={username}
            email={email}
            fullName={fullName}
            phoneNumber={phoneNumber}
            location={location}
            profilePic='https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw'

          />
          
        </View>
        <View>
          <ImageBackground source={{uri:'https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw'}}>

          </ImageBackground>
        </View>


      </ScrollView>
    </View>
  );
}