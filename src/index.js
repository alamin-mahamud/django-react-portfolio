// import react core-libs
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; // import bootstrap
import './styles/index.css'; // custom css
import App from './App'; // Core Component
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
        <App />,
        document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
