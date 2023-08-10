import { ImageBackground, ScrollView } from 'react-native';

import { View } from '../../components/Themed';
import ProfileCard from '../ProfileCard';

export default function Profile() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="p-4 flex-1">
          <ProfileCard
            userName="Juan"
            email="juandelacruz@gmail.com"
            fullName="Juan Dela Cruz"
            phoneNumber="09914567891"
            location="Barotac Nuevo"
            profilePic="https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw"
          />
        </View>
        <View>
          <ImageBackground
            source={{
              uri: 'https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw',
            }}
          ></ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
}
