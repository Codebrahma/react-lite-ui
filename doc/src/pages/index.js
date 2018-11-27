import React from 'react';
import Layout from '../components/layout';
import './index.scss';
import liteLogo from '../images/match.svg';
import LandingMain from '../templates/landing-main';

const IndexPage = () => (
  <Layout>
    <div className="hero-container" role="main">
      <div className="hero-content">
        <img src={liteLogo} alt="react-lite-ui-logo" />
        <div>
          <h2>React Lite UI</h2><br />
          <p>A set of light wright React Components</p>
        </div>
      </div>
      <div className="hero-bottom" />
    </div>
    <LandingMain />
  </Layout>
);

export default IndexPage;
