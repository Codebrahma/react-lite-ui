import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/layout';
import './index.scss';
import liteLogo from '../images/match.svg';
import LandingMain from '../templates/landing-main';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.heroBottom = null;
    this.state = {
      prevPageOffset: 0,
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.registerScroll);
    // eslint-disable-next-line react/no-find-dom-node
    ReactDOM.findDOMNode(this).scrollTo(0, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.registerScroll);
  }

  setNavbarState = (pageYOffset, innerHeight) => {
    const { prevPageOffset } = this.state;
    const { opacity } = document.getElementsByClassName('navbar')[0].style;
    if (this.isInAnimationArea(pageYOffset, innerHeight) && (prevPageOffset > pageYOffset)) {
      console.log('scrolling up', opacity);
    } else if (this.isInAnimationArea(pageYOffset, innerHeight) && (prevPageOffset < pageYOffset)) {
      const calculateOpacity = (0.2 * innerHeight) / (pageYOffset - (0.5 * innerHeight)) / 10;
      console.log(calculateOpacity);
    }
    this.setState({
      prevPageOffset: pageYOffset,
    });
  }

  // eslint-disable-next-line max-len
  isInAnimationArea = (pageYOffset, innerHeight) => (pageYOffset > 0.5 * innerHeight) && (pageYOffset < 0.7 * innerHeight)

  registerScroll = (e) => {
    const path = e.composedPath && e.composedPath();
    const pageYOffset = path[1].pageYOffset || 1;
    const { innerHeight } = path[1];
    this.setNavbarState(pageYOffset, innerHeight);
    const skewValue = 4 - ((4 / (0.7 * innerHeight)) * pageYOffset);
    document.getElementsByClassName('hero-bottom')[0].style.transform = `skewY(${-(skewValue)}deg)`;
  }

  render() {
    return (
      <div>
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
      <Layout>
        <LandingMain />
      </Layout>
      </div>
    );
  }
}

export default IndexPage;
