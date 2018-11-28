import React, { Component } from 'react';
import Layout from '../components/layout';
import './index.scss';
import liteLogo from '../images/match.svg';
import LandingMain from '../templates/landing-main';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.heroBottom = null;
  }
  componentDidMount() {
    window.addEventListener('scroll', this.registerScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.registerScroll);
  }

  registerScroll = (e) => {
    const skewValue = 6 - ((6 / (0.8 * e.path[1].innerHeight)) * (e.path[1].pageYOffset || 1));
    document.getElementsByClassName('hero-bottom')[0].style.transform = `skewY(${-(skewValue)}deg)`;
  }

  render() {
    return (
      <Layout>
        <div className="hero-container" role="main">
          <div className="hero-content">
            <img src={liteLogo} alt="react-lite-ui-logo" />
            <div>
              <h2>React Lite UI</h2><br />
              <p>A set of light weight React Components</p>
            </div>
          </div>
          <div
            className="hero-bottom"
            ref={(ref) => { this.heroBottom = ref; }}
          />
        </div>
        <LandingMain />
      </Layout>
    );
  }
}

export default IndexPage;
