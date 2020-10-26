import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from './stores';

ReactDOM.render(
  <Provider {...Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
