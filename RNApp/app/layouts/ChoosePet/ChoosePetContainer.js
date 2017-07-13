import React, { PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import ChoosePet from './ChoosePet';

const ChoosePetContainer = ({ choosePetReady, choosePet }) => {
  return (
    <ChoosePet
      choosePetReady={choosePetReady}
      choosePet={choosePet}
    />
  );
};

ChoosePetContainer.propTypes = {
  choosePetReady: PropTypes.bool,
  choosePet: PropTypes.array,
};

export default createContainer(() => {
  const handle = Meteor.subscribe('pets-list');

  return {
    choosePetReady: handle.ready(),
    choosePet: Meteor.collection('pets').find(),
  };
}, ChoosePetContainer);
