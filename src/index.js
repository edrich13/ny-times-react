import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './assets/stylesheet/custom.scss';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
