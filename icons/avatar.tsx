import { View } from 'react-native';
import { createAvatar } from '@dicebear/core';
import { notionists } from '@dicebear/collection';
import { SvgXml } from 'react-native-svg';

export default function Avatar() {
  const avatar = createAvatar(notionists, {
    seed: 'Abby',
  }).toString();

  return (
    <View className='w-full bg-blue-600'>
      <SvgXml xml={avatar} />
    </View>
  );
}