import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { getImageLibrary } from '../../ui-core/dataAccess/media/getImageLibrary';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Button
        title="Test"
        onPress={async () => {
          const res = await getImageLibrary();

          if (res.didCancel) {
            console.log('Image selection cancelled');
          }

          if (res.errorCode) {
            console.log('[ERROR] ' + `${res.errorCode}: ${res.errorMessage}`);
          }

          if (res.medias) {
            res.medias.forEach(console.log);
          }
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
