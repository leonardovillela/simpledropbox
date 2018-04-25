import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { withOAuth } from 'aws-amplify-react';

import Home from './Home';
import Logout from './Logout';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/logout" component={Logout} />
        <Route path="/" component={Menu} />
      </Switch>
    );
  }
}

export default withOAuth(App);
