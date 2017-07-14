import React from 'react';
import { Text, View, Image } from 'react-native';
import images from './images';

const Component = (props) => {
  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Image
        style={{
          margin: 0, marginTop: 100, backgroundColor: 'lightgrey',
        }}
        source={images.idle}
        defaultSource={images.idle}
        maxWidth={300}
        maxHeight={400}
      />
    </View>
  );
}

export default Component;
