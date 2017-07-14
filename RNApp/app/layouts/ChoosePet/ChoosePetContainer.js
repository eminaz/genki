import React, { PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import ChoosePet from './ChoosePet';

const ChoosePetContainer = (props) => {
  const { choosePetReady, choosePet, chooseOnePet } = props;
  return (
    <ChoosePet
      choosePetReady={choosePetReady}
      choosePet={choosePet}
      onPressChoosePet={chooseOnePet}
      user={props.user}
    />
  );
};

ChoosePetContainer.propTypes = {
  choosePetReady: PropTypes.bool,
  choosePet: PropTypes.array,
  navigator: React.PropTypes.object,
  chooseOnePet: React.PropTypes.func
};

export default createContainer(() => {
  const handle = Meteor.subscribe('pets-list');
  const user = Meteor.user() || {};

  return {
    choosePetReady: handle.ready(),
    choosePet: Meteor.collection('pets').find(),
    chooseOnePet: (_id) => {
      console.log('==========> _id:', _id);
      Meteor.collection('users').update(user._id, {
        $set: {'profile.selected_pet': _id}
    }, (err, result) => {
        console.log(err, result);
      });
    },
    user: user
  };
}, ChoosePetContainer);
