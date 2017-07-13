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
