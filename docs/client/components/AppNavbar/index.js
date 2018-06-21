import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: '',
    }
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(activeLink) {
    this.setState({
      activeLink,
    })
  }

  render() {
    const {
      activeLink,
    } = this.state;

    return (
      <div className={styles.navbar}>
        <Row className="full-height parent-row">
          <Col xs={3} sm={3} md={3} lg={2}>
            <div className="nav-wrapper logo full-height">
              <img
                alt="Codebrahma"
                src="https://codebrahma.com/wp-content/themes/codebrahma/public/img/cb_logo_small.png"
              />
            </div>
          </Col>
          <Col xs={6} sm={4} md={3} lg={6} className="title">
            <div className="nav-wrapper title full-height">
              React Lite UI
            </div>
          </Col>
          <Col xs={12} sm={5} md={6} lg={4}>
            <Row className="nav-wrapper nav-link full-height">
              <Col xs={3} className="center-align">
                <Link
                  to="/install"
                  onClick={() => { this.handleNavClick('install') }}
                >
                  <span className={`${activeLink === 'install' && 'active'}`}> Install </span>
                </Link>
              </Col>
              <Col xs={4} className={`center-align ${activeLink === 'playground' && 'active'}`}>
                <Link
                  to="/playground"
                  onClick={() => { this.handleNavClick('playground') }}
                >
                  <span className={`${activeLink === 'playground' && 'active'}`}> Playground </span>
                </Link>
              </Col>
              <Col xs={2} className={`center-align ${activeLink === 'components' && 'active'}`}>
                <Link
                  to="/components"
                  onClick={() => { this.handleNavClick('components') }}
                > 
                  <span className={`${activeLink === 'components' && 'active'}`}>API</span> 
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Navbar;
