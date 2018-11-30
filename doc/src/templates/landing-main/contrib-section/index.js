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
          <Card
            theme={theme}
            header="SOMETHING TO BUILD?"
            footer={
              <Button flat theme={theme}>Contact Us</Button>
            }
            elevation="medium"
          >
            <div className="col card-content">
              <img src={engineerImage} />
            </div>
          </Card>
          <Card
            theme={theme}
            header="FOR DEVELOPERS"
            footer={
              <Button type="primary" bordered>Apply for job</Button>
            }
            elevation="medium"
          >
            <div className="col card-content">
              <img src={developerImage} />
            </div>
          </Card>
          <Card
            theme={theme}
            header="TO CONTRIBUTE"
            footer={
              <Button type="primary" bordered>Create a PR</Button>
            }
            elevation="medium"
          >
            <div className="col card-content">
              <img src={contributeImage} />
            </div>
          </Card>
        </div>
        <FooterSection />
      </div>
    );
  }
}

export default ContributionSection;
