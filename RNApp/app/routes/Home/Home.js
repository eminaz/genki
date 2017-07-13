import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={{width: 300, height: 300, margin: 10, marginTop: 120, backgroundColor: 'lightgrey'}} />
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <Button
          text="Feed"
          onPress={props.onDetailsPress}
        />
        <Button
          text="Clearn"
          onPress={props.onDetailsPress}
        />
        <Button
          text="Play"
          onPress={props.onDetailsPress}
        />
      </View>
    </View>
  );
};

Home.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Home;
