import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { DuffleRequest } from 'duffle';
import { service } from '../../service';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Button
        title="Test"
        onPress={async () => {
          console.log('Attempting to store a user...');
          const body = new Map<string, any>();
          body.set('firstName', 'Johnathan');
          body.set('lastName', 'doe');

          const request: DuffleRequest = {
            method: 'POST',
            url: '/api/userinfo',
            body: body,
          };

          const res = await service.resolve(request);
          console.log('Test: ' + res.body);
        }}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
