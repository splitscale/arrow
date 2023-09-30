import { Alert, Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { getImageLibrary } from '../../ui-core/dataAccess/media/getImageLibrary';

import * as ImagePicker from 'expo-image-picker';
import { saveLogsToDb } from '../../utils/saveLogsToDb';
import { useState } from 'react';
import { getAllLogsFromDb } from '../../utils/getAllLogsFromDb';
import { deleteLogFromDb } from '../../utils/deleteLogFromDb';
import Avatar from '../../icons/avatar';

export default function TabOneScreen() {
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const [isLoggerStorageGranted, setIsLoggerStorageGranted] =
    useState<boolean>(false);

  const [uri, setUri] = useState<string>('');

  const baseUri =
    'content://com.android.externalstorage.documents/tree/primary:sublx/document/primary:sublx';

  return (
    <View style={styles.container}>
      <Avatar />

      {/* <Text style={styles.title}>Tab One</Text>
      <Button
        title="Test"
        onPress={async () => {
          if (!status?.granted) await requestPermission();

          const res = await getImageLibrary();

          if (res.didCancel) {
            console.log('Image selection cancelled');
          }

          console.log('Medias: ', res.medias);
        }}
      />

      <Button
        title="Get all logs"
        onPress={async () => {
          const allLogs = await getAllLogsFromDb();

          if (allLogs !== null) {
            console.log('All logs data:', allLogs);
            // Process the retrieved logs data here
          }
        }}
      />

      <Button
        title="Test log"
        onPress={async () => {
          await saveLogsToDb('test log');
        }}
      />
      <Button
        title="Delete"
        onPress={async () => {
          await deleteLogFromDb();
        }}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
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
