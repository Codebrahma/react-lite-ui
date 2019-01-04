import React from 'react';
import Layout from '../components/layout';
import ghostRider from '../images/404.svg';
import './404.scss';

const NotFoundPage = () => (
  <Layout>
    <div className="four-o-four-wrapper">
      <div className="four-o-four-bg">
        <img src={ghostRider} alt="404 Background" />
      </div>
      <div className="four-o-four-content">
        <h1>Oops!! Misfired</h1>
        <h3>Arghh!! My head is BURNING!!!!</h3>
        <p>
          Can you please take me to one of below locations? Pretty Pleaseeee!!
        </p>
        <div className="four-o-four-locations">
          <a href="https://codebrahma.com/react-lite-ui">
            My home
          </a>
          <a href="https://codebrahma.com/react-lite-ui/documentation">
            Docs Dermatology
          </a>
          <a href="https://codebrahma.com/react-lite-ui/usage">
            Usage Cosmetology
          </a>
          <a href="https://codebrahma.com/react-lite-ui/playground">
            MultiSpecs Playground
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
