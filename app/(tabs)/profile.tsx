import { ImageBackground, ScrollView } from 'react-native';

import { View } from '../../components/Themed';
import ProfileCard from '../ProfileCard';
import { useEffect, useState } from 'react';
import { handleLoadCurrentUser } from '../../ui-core/handlers/user/handleLoadCurrentUser';
import { useRouter } from 'expo-router';
import { logger } from '../../utils/logger';
import { CurrentUser } from '../../ui-core/types/currentUser';

export default function Profile() {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  const router = useRouter();

  useEffect(() => {
    logger.info('loading profile');

    handleLoadCurrentUser()
      .then((res) => {
        logger.info('profile loaded: ' + res.email);
        setCurrentUser(res);
      })
      .catch((err) => {
        logger.error(err);
        router.push('/login');
      });
  }, []);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="p-4 flex-1">
          <ProfileCard
            email={currentUser?.email ?? 'none'}
            phoneNumber={currentUser?.phoneNumber ?? 'none'}
            firstName={currentUser?.firstName ?? 'none'}
            lastName={currentUser?.lastName ?? 'none'}
            profilePic={currentUser?.photoUrl ?? 'none'}
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
