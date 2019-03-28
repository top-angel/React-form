import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';

// Import scenes
import Home from './Home/Home';
import FormBuilderScene from './FormBuilderScene';

// Import modals
import ModalConductor from '../modals/ModalConductor';

class App extends React.Component {
  render() {
    return (
      <main>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={props => <FormBuilderScene {...props} />}
            />
            <Route
              path="/form-builder"
              render={props => <FormBuilderScene {...props} />}
            />
          </Switch>
        </Router>
        <ReduxToastr position="bottom-left" />
        {/* All modals come here */}
        <ModalConductor />
      </main>
    );
  }
}

export default App;
