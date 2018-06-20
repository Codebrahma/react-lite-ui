import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import GettingStartedPage from './components/GettingStartedPage';
import ComponentsPage from './components/ComponentsPage';
import AppNavbar from './components/AppNavbar';

const App = () => (
  <div>
    <AppNavbar />
    <Route exact path="/home" component={HomePage} />
    <Route exact path="/getting-started" component={GettingStartedPage} />
    <Route exact path="/components" component={ComponentsPage} />
  </div>
);

export default App;
