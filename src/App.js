import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router';
import { withOAuth } from 'aws-amplify-react';

import Home from './Home';
import Logout from './Logout';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <Fragment>
        <button onClick={this.props.OAuthSignIn}>
          Sign in with AWS
        </button>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={Menu} />
        </Switch>
      </Fragment>
    );
  }
}

export default withOAuth(App);
