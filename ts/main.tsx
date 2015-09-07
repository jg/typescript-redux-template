/// <reference path="./references.ts" />

// import HelloBox from './components/helloBox'

// $(document).ready(() => {
//   React.render(React.createElement(HelloBox),
//                document.getElementById('container'))
// });

import { Provider } from 'react-redux';
import App from './containers/app';
import configureStore from './store/configureStore';
import * as React from 'react';

const store = configureStore();

store.subscribe(() =>
  console.log(store.getState())
);

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('container')
);
