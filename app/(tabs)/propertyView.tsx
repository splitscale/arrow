import React from 'react';
import { View, Text, Image } from 'react-native';

export default function propertyView() {
  return (
    <><View style={{ flex: 1, flexDirection: 'row', gap: 1, padding:3, }}>
      <View style={{ flex: 3 }}>
        <Image
          source={{
            uri: 'https://www.investopedia.com/thmb/OQxvtmsJwBCy6kVw86E-ooDRVqs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rent_house_73089751-5bfc333346e0fb002602ddbe.jpg'
          }}
          resizeMode='contain'
          style={{ padding: 4, width: '100%', height: 200, borderRadius: 8 }} />
      </View>

      <View style={{ flex: 2 }}>
        <Text style={{ textDecorationLine: 'underline' }}>
          Image Description
        </Text>
      </View>

      <View style={{ flex: 2 }}>
        {/* Add your content for the third view here */}
      </View>
    </View>
    <View style={{ flex: 1, flexDirection: 'row', gap:1 }}>
        <Text>
          Conten here
        </Text>
      </View>
      </>
  );
}
