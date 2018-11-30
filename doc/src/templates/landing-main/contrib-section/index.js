import React, { Component } from 'react';
import Card from '../../../../../src/card';
import Button from '../../../../../src/button';
import engineerImage from '../../../images/engineer.svg';
import developerImage from '../../../images/man-in-office-desk-with-computer.svg';
import contributeImage from '../../../images/triple-arrow-merging-to-one.svg';
import theme from './index.scss';
import FooterSection from './footer';

class ContributionSection extends Component {
  render() {
    return (
      <div className="contrib-section">
        <div className="overlay" />
        <div className="row">
          <div className="col">
          <Card
            theme={theme}
            header="SOMETHING TO BUILD?"
            footer={
              <Button href="https://codebrahma.com/contact/" flat theme={theme}>Contact Us</Button>
            }
            elevation="medium"
          >
            <div className="col card-content">
              <img src={engineerImage} />
            </div>
          </Card>
          </div>
          <div className="col">
          <Card
            theme={theme}
            header="FOR DEVELOPERS"
            footer={
              <Button href="https://codebrahma.com/careers/" type="primary" bordered>Apply for job</Button>
            }
            elevation="medium"
          >
            <div className="col card-content">
              <img src={developerImage} />
            </div>
          </Card>
          </div>
          <div className="col">
          <Card
            theme={theme}
            header="TO CONTRIBUTE"
            footer={
              <Button href="https://github.com/Codebrahma/react-lite-ui" type="primary" bordered>Create a PR</Button>
            }
            elevation="medium"
          >
            <div className="col card-content">
              <img src={contributeImage} />
            </div>
          </Card>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }
}

export default ContributionSection;
