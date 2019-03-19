import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

/** Import service reducers */
// const scenesReducer = combineReducers({
// })

// Import modal reducers
import modalReducer from '../modals/modalConductorReducer';

const servicesReducer = combineReducers({
});

export default combineReducers({
  routing: routerReducer,
  services: servicesReducer,
  modal: modalReducer
});
