import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import styles from './styles.scss';

const AppBar = () => (
  <div className={styles.navbar}>
    <Row className="full-height">
      <Col xs={1} className="full-height">
        <div className="nav-wrapper logo full-height">
          <img
            alt="Codebrahma"
            src="https://codebrahma.com/wp-content/themes/codebrahma/public/img/cb_logo_small.png"
          />
        </div>
      </Col>
      <Col xs={3} className="title">
        <div className="nav-wrapper title full-height">
          React Lite UI
        </div>
      </Col>
      <Col xsOffset={4} xs={4}>
        <Row className="nav-wrapper full-height">
          <Col xs={3}>
            Install
          </Col>
          <Col xs={5}>
            Playground
          </Col>
          <Col xs={2}>
            API
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default AppBar;
