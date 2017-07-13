import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={{width: 300, height: 300, margin: 30, backgroundColor: 'lightgrey'}} />
      <Button
        style={{width: 30}}
        text="Feed"
        onPress={props.onDetailsPress}
      />
      <Button
        text="Clearn"
        onPress={props.onDetailsPress}
      />
      <Button
        text="Details"
        onPress={props.onDetailsPress}
      />
    </View>
  );
};

Home.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Home;
