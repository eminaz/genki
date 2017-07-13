import React, { PropTypes } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import Loading from '../../components/Loading';
import styles from './styles';
import images from '../../config/images';

const ChoosePet = ({ choosePetReady, choosePet }) => {
  if (!choosePetReady) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {details.map((detail) => (
          <View style={styles.item} key={choosePet._id}>
            <Text style={styles.itemText}>{choosePet.name}</Text>
            <Image style={styles.image} source={choosePet.image}></Image>
            <Image style={styles.image} source={images.choosePetStoli1}></Image>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

ChoosePet.propTypes = {
  choosePetReady: PropTypes.bool,
  choosePet: PropTypes.array,
};

ChoosePet.defaultProps = {
  choosePet: [],
};

export default ChoosePet;
