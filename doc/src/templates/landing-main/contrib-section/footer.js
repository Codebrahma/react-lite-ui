import React from 'react';
import Button from '../../../../../lib/button';
import theme from './footer.module.scss';

const FooterSection = () => (
  <div className="row">
    <div className="row">
      {'Want us to build something for you? '}
      {'Great! We would love to!'}
      <Button theme={theme} bordered href="https://codebrahma.com/contact/" >Let us know here!</Button>
    </div>
    <div className="row bottom-bar">Made with <span className="heart">❤</span> by<a target="blank" href="https://www.codebrahma.com"><span>Codebrahma</span></a></div>
  </div>
);

export default FooterSection;
