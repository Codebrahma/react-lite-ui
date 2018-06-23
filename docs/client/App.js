import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import GettingStartedPage from './components/GettingStartedPage';
import ComponentsPage from './components/ComponentsPage';
import PlaygroundPage from './components/PlaygroundPage';
import AppNavbar from './components/AppNavbar';
import styles from './styles.scss';

const App = () => (
  <div className={styles['app-wrapper']}>
    <AppNavbar />
    <div className="content-wrapper">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/install" component={GettingStartedPage} />
      <Route exact path="/playground" component={PlaygroundPage} />
      <Route exact path="/components" component={ComponentsPage} />
    </div>
  </div>
);

export default App;
