import React from 'react';
import Home from './Home';
import Routes from '../../config/routes';
import Meteor, { createContainer } from 'react-native-meteor';

const HomeContainer = (props) => {
  return (
    <Home
      {...props}
      onDetailsPress={() => props.navigator.push(Routes.getDetailsRoute())}
    />
  );
};

HomeContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default createContainer(() => {
  const handle = Meteor.subscribe('pet-states');
  return {
    user: Meteor.user(),
    petStatesReady: handle.ready(),
    pet: Meteor.collection('pet_states').findOne({_id: Meteor.userId()}) || {},
    feed: () => {
      if (Meteor.collection('pet_states').findOne()) {
        Meteor.collection('pet_states').update(Meteor.userId(), {
          $set: {'hungry': false}
        }, (err, result) => {
          console.log(err, result);
        });
      }
      else {
        Meteor.collection('pet_states').insert({_id: Meteor.userId()});
      }
    },
    clean: () => {
      if (Meteor.collection('pet_states').findOne()) {
        Meteor.collection('pet_states').update(Meteor.userId(), {
          $set: {'dirty': false}
        }, (err, result) => {
          console.log(err, result);
        });
      }
    },
    play: () => {
      if (Meteor.collection('pet_states').findOne()) {
        Meteor.collection('pet_states').update(Meteor.userId(), {
          $set: {'bored': false}
        }, (err, result) => {
          console.log(err, result);
        });
      }
    },
    getHungry: () => {
      Meteor.collection('pet_states').update(Meteor.userId(), {
        $set: {'hungry': true}
      }, (err, result) => {
        console.log(err, result);
      });
    },
    poop: () => {
      Meteor.collection('pet_states').update(Meteor.userId(), {
        $set: {'dirty': true}
      }, (err, result) => {
        console.log(err, result);
      });
    },
    feelBored: () => {
      Meteor.collection('pet_states').update(Meteor.userId(), {
        $set: {'bored': true}
      }, (err, result) => {
        console.log(err, result);
      });
    }
  };
}, HomeContainer);
