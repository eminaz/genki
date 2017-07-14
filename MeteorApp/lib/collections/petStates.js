import {Mongo} from 'meteor/mongo';

const PetStates = new Mongo.Collection('pet_states');

PetStates.allow({
  insert(userId, doc) {
    return true;
  },
  update(userId, doc, fields, modifier) {
    return true;
  },
  remove(userId, doc) {
    return true;
  },
  fetch: ['owner']
});

export default PetStates;
