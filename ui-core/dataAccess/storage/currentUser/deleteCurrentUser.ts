import { MMKV } from "react-native-mmkv";

export function deleteCurrentUser(storage: MMKV) {
  storage.delete('current');
}
