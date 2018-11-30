import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { browserHistory } from 'react-router';
import App from './App';

const Routes = () => (
  <Router basename="/react-lite-ui" history={browserHistory}>
    <App />
  </Router>
);

ReactDOM.render((<Routes />), document.getElementById('app'));
