import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Pet from './Pet'

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Icon name="coin" size={40} color="orange" style={styles.coinIcon} />
      <Pet />
      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <View style={styles.buttonContainer} >
          <Button
            text="Feed"
            onPress={props.onDetailsPress}
          />
        </View>
        <View style={styles.buttonContainer} >
          <Button
            text="Clean"
            onPress={props.onDetailsPress}
          />
        </View>
        <View style={styles.buttonContainer} >
          <Button
            text="Play"
            onPress={props.onDetailsPress}
          />
        </View>
      </View>
    </View>
  );
};

Home.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Home;
