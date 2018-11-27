import React from 'react'
import { Link } from 'gatsby'

import * as components from '../../../src';
import Layout from '../components/layout'
import './index.scss';
import liteLogo from '../images/match.svg';

const {
  TextInput,
} = components.default;

const IndexPage = () => (
  <Layout>
    <div className="hero-container" role="main">
      <div className="hero-content">
      <img src={liteLogo} />
      <div>
        <h2>React Lite UI</h2><br/>
        <p>A set of light wright React Components</p>
      </div>
      </div>
    <div className="hero-bottom"></div>
    </div>
  </Layout>
)

export default IndexPage
