import React, { PropTypes } from 'react';
import { Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import Loading from '../../components/Loading';
import styles from './styles';
import _ from 'lodash';

const ChoosePet = (props) => {
  const { choosePet, choosePetReady, onPressChoosePet} = props;
  let alreadyPickedPet = false;
  let myPet = null;
  if (!choosePetReady) {
    return <Loading />;
  }

  if (_.get(props.user, 'profile.selected_pet') !== undefined) {
    alreadyPickedPet = true;
    _.each(choosePet, function(pet) {
      myPet = pet;
    });
  }

  if (alreadyPickedPet === true) {
    return (
        <View style={styles.pickedItem} key={myPet.id}>
          <Image style={styles.pickedImage} source={{uri: myPet.image}}/>
          <Text style={styles.itemText}>{myPet.name}</Text>
        </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ScrollView>
          {choosePet.map((choosePet) => (
            <TouchableHighlight onPress={() => onPressChoosePet(choosePet._id)}>
              <View style={styles.item} key={choosePet._id}>

                <Image style={styles.image} source={{uri: choosePet.image}}/>
                <Text style={styles.itemText}>{choosePet.name}</Text>

              </View>
            </TouchableHighlight>

          ))}
        </ScrollView>
      </View>
    );
  }
};


ChoosePet.propTypes = {
  choosePetReady: PropTypes.bool,
  choosePet: PropTypes.array,
  onPressChoosePet: React.PropTypes.object,
};

ChoosePet.defaultProps = {
  choosePet: [],
};

export default ChoosePet;
