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
        <Col xs={4} className="advantage-wrapper">
          <div className="advantage">
            <div className="header">
              Complete Set of components
            </div>
            <div className="content">
              <ul>
                <li> 10+ UI components </li>
                <li> Most commonly used </li>
                <li> Responsive fit for all screen </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col xs={4} className="advantage-wrapper">
          <div className="advantage">
            <div className="header">
              Light Weight
            </div>
            <div className="content">
              <ul>
                <li> Total gzipped size less than 20KB </li>
                <li> Delta Increase for each Import</li>
                <li> Blazingly fast </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col xs={4} className="advantage-wrapper">
          <div className="advantage">
            <div className="header">
              Highly Themeable
            </div>
            <div className="content">
              <ul>
                <li>Theme using SASS / SCSS</li>
                <li>Have Global / Local Theming</li>
                <li>Customization for all DOM elements</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default HomePage;
