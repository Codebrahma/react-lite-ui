import React from 'react';
import iphone from '../../images/i-phone-6.svg';
import ipad from '../../images/i-pad-air.svg';
import desktop from '../../images/desktop.svg';
import FeaturesSection from './features';
import Button from '../../../../src/button';
import ContributionSection from './contrib-section';

import './index.scss';

const LandingMain = () => (
  <div className="landing-main">
    <FeaturesSection />
    <div className="row screens">
      <div className="image-container">
        <div>
          <img src={iphone} alt="iphone-display" />
        </div>
        <div>
          <img src={ipad} alt="ipad-display" />
        </div>
        <div>
          <img src={desktop} alt="desktop-display" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <p>Designed for all screen sizes.</p>
        <Button>Take a Tour</Button>
      </div>
    </div>
    <ContributionSection />
  </div>
);

export default LandingMain;
