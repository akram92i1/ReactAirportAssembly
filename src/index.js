import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App titleApp={"Person Manage"} />, document.getElementById('root'));
registerServiceWorker();
