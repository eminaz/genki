import {Mongo} from 'meteor/mongo';

const Pets = new Mongo.Collection('pets');

Pets.allow({
  insert(userId, doc) {
    return true;
  },
  update(userId, doc, fields, modifier) {
    console.log('===========> modifier:', modifier);
    return true;
  },
  remove(userId, doc) {
    return true;
  },
  fetch: ['owner']
});

export default Pets;

