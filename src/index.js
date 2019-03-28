import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

// Import {history} and store
import store, { history } from './store';

// Import root scene
import App from './scenes/App';

// Import assets
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'assets/scss/app.css';
import 'global.css';

// Import register service worker
import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
