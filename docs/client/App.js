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
      <Route path="/install" component={GettingStartedPage} />
      <Route path="/playground" component={PlaygroundPage} />
      <Route path="/components" component={ComponentsPage} />
      <Route exact path="/" component={HomePage} />
    </div>
  </div>
);

export default App;
