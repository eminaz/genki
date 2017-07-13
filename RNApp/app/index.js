import React from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import LoggedOut from './layouts/LoggedOut';
import LoggedIn from './layouts/LoggedIn';
import ChoosePet from './layouts/ChoosePet';
import Loading from './components/Loading';
import settings from './config/settings';

Meteor.connect(settings.METEOR_URL);

const RNApp = class extends React.Component {
  componentDidMount() {
     Meteor.loginWithPassword('a@a.com', '11111111');
     console.disableYellowBox = true;
  }
  render() {
    const {status, user, loggingIn} = this.props;

    if (status.connected === false || loggingIn) {
      return <Loading />;
    } else if (user !== null && firstTimeUser) {
      return <ChoosePet />;
    } else if (user !== null) {
      return <LoggedIn />;
    }
    return <LoggedOut />;
  }
};

RNApp.propTypes = {
  status: React.PropTypes.object,
  user: React.PropTypes.object,
  loggingIn: React.PropTypes.bool,
};

export default createContainer(() => {
  return {
    status: Meteor.status(),
    user: Meteor.user(),
    loggingIn: Meteor.loggingIn(),
  };
}, RNApp);
