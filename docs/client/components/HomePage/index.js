import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styles from './styles.scss';

const HomePage = () => (
  <div className={styles['home-page']}>
    <div className="title">
      React Lite UI
    </div>
    <div className="about">
      <p>
        React Lite UI is a set of highly customizable, light weight React components.
      </p>
      <p>
      We at Codebrahma use this components to build our React Applications.
      </p>
      <p>
        Try these components in playground to see the instant results.
      </p>
    </div>
    <div className="advantage-section">
      <Row>
        <Col xsOffset={1} xs={3} className="advantage">
          <div className="header">
            10+ UI components
          </div>
          <div className="content">
            The collection has more than 10+ UI components which we use regularly
          </div>
        </Col>
        <Col xsOffset={1} xs={3} className="advantage">
          <div className="header">
            Light Weight
          </div>
          <div className="content">
            Total gzipped size is 20KB.
          </div>
        </Col>
        <Col xsOffset={1} xs={3} className="advantage">
          <div className="header">
            Highly Themeable
          </div>
          <div className="content">
            You can literally customize anything
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default HomePage;
