import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/counter';

export default function configureStore() {
  let store = createStore(reducer);

  return store;

}
