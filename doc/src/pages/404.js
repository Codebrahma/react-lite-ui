import React from 'react';
import Layout from '../components/layout';
// import burntMatch from '../images/404.svg';
import angryMan from '../images/404.svg';
// import angryMan from '../images/angry.svg';
import './404.scss';


const NotFoundPage = () => (
  <Layout>
    <div className="four-o-four-wrapper">
      <div className="four-o-four-bg">
        <img src={angryMan} alt="404 Background" />
      </div>
      <h1>Oopsie... page not found</h1>
      <p>Sorry, I am exhausted and couldn&#39;t find the page you are looking for.</p>
      <div className="four-o-four-content">
        <h3> But, I do have lot of <a href="https://react-lite-ui.netlify.com/documentation">components</a> you might find interesting.</h3>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
