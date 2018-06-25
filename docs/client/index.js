import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const Routes = () => (
  <Router basename="/react-lite-ui">
    <App />
  </Router>
);

ReactDOM.render((<Routes />), document.getElementById('app'));
