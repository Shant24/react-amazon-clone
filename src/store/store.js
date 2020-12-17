import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from './reducers/rootReducers';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = applyMiddleware(thunk, logger);

const store = createStore(rootReducers, composeWithDevTools(middlewares));

export default store;
