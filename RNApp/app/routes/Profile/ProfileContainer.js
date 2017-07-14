import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import Profile from './Profile';

class ProfileContainer extends Component {
  handleSignOut() {
    Meteor.logout();
  }
  takeMeasurement() {
    console.log('------ take measurement!');
  }
  render() {
    const { user } = this.props;

    return (
      <Profile
        user={user}
        takeMeasurement={this.takeMeasurement.bind(this)}
        signOut={this.handleSignOut.bind(this)} />
    );
  }
}

ProfileContainer.propTypes = {
  user: React.PropTypes.object,
};

export default createContainer(() => {
  return {
    user: Meteor.user(),
  };
}, ProfileContainer);
