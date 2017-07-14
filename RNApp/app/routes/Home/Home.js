import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Badge from 'react-native-smart-badge'
import Pet from './Pet'

const Home = (props) => {
  const { feed, user } = props;
  return (
    <View style={styles.container}>
      <View style={styles.coinIcon}>
        <Icon name="coin" size={40} color="orange" />
        <Badge textStyle={{fontSize: 16, paddingTop: 7, paddingBottom: 7}}
          style={{backgroundColor: 'orange', marginBottom: 3}}>
            {user.profile.coins || ''}
        </Badge>
      </View>
      <Pet {...props} />
      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <View style={styles.buttonContainer} >
          <Button
            text="Feed"
            onPress={props.feed}
          />
        </View>
        <View style={styles.buttonContainer} >
          <Button
            text="Clean"
            onPress={props.clean}
          />
        </View>
        <View style={styles.buttonContainer} >
          <Button
            text="Play"
            onPress={props.play}
          />
        </View>
      </View>

      <View style={{
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <View style={styles.buttonContainer} >
          <Button
            text="Hungry"
            onPress={props.getHungry}
          />
        </View>
        <View style={styles.buttonContainer} >
          <Button
            text="Poop"
            onPress={props.poop}
          />
        </View>
        <View style={styles.buttonContainer} >
          <Button
            text="Bored"
            onPress={props.feelBored}
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
