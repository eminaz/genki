import { Meteor } from 'meteor/meteor';
import { Pets } from '/lib/collections';

export default () => {
  Meteor.publish('pets-list', () => {
    return Pets.find();
  });
}
