import { combineReducers } from 'redux';

import productReducer from './productReducer';
import authReducer from './authReducer';

const rootReducers = combineReducers({
  auth: authReducer,
  product: productReducer,
});

export default rootReducers;
