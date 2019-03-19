import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import AOS from 'aos';
import ReduxToastr from 'react-redux-toastr';

// Import scenes
import Home from './Home/Home';

// Import modals
import ModalConductor from '../modals/ModalConductor';

/** Import redux actions */
import { getStoredUser } from '../services/auth/authActions';

class App extends React.Component {
  componentWillMount() {
    this.props.authActions.getStoredUser();
  }

  componentDidMount() {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in-out-sine',
      delay: 100
    });
  }

  render() {
    return (
      <main>
        <Router>
          <Switch>
            <Route path="/" render={props => <Home {...props} />} />
          </Switch>
        </Router>
        <ReduxToastr position="bottom-left" />
        {/* All modals come here*/}
        <ModalConductor />
      </main>
    );
  }
}

export default App;