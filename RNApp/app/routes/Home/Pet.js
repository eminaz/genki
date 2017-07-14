import React from 'react';
import { Text, View, Image } from 'react-native';
import images from './images';

const getImageSource = (pet) => {
  if (pet.eating) {
    return images.eating;
  }
  else if(pet.dirty) {
    return images.poop;
  }
  else if (pet.hungry || pet.bored) {
    return images.sad;
  }
  else {
    return images.idle;
  }
}

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
        source={getImageSource(props.pet)}
        defaultSource={images.idle}
        maxWidth={300}
        maxHeight={400}
      />
    </View>
  );
}

export default Component;
