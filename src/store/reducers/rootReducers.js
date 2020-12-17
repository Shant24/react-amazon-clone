import { combineReducers } from 'redux';

import basketReducer from './basketReducer';
import authReducer from './authReducer';

const rootReducers = combineReducers({
  auth: authReducer,
  basket: basketReducer,
});

export default rootReducers;
