import React from 'react';
import { Text, View, Image } from 'react-native';
import images from './images';
import Camera from 'react-native-camera';

const getImageSource = (pet) => {
  if (pet.eating) {
    return images.eating;
  }
  else if (pet.hungry || pet.dirty || pet.bored) {
    return images.sad;
  }
  else {
    return images.idle;
  }
}

const Component = class extends React.Component {
  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            aspect={Camera.constants.Aspect.fill}>
            <Text onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>

        <Image
          style={{
            margin: 0, marginTop: 100, backgroundColor: 'lightgrey',
          }}
          source={getImageSource(this.props.pet)}
          defaultSource={images.idle}
          maxWidth={300}
          maxHeight={400}
        />
      </View>
    );
  }
}

export default Component;
