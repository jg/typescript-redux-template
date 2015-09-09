/// <reference path="../references.ts" />

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default function configureStore() {
  const store = createStoreWithMiddleware(reducer);

  return store;
}
