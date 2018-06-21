import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import styles from './styles.scss';

const AppBar = () => (
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
          <Col xs={4} className="center-align">
            Install
          </Col>
          <Col xs={4} className="center-align">
            Playground
          </Col>
          <Col xs={4} className="center-align">
            API
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default AppBar;
