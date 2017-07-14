import { Meteor } from 'meteor/meteor';
import { PetStates } from '/lib/collections';

export default () => {
  Meteor.publish('pet-states', () => {
    return PetStates.find();
  });
}
