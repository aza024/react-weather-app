import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//component name, location of div for component insert (one big wrapper div)
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
