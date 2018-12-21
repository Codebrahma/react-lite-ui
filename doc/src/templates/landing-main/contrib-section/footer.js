import React from 'react';
import Button from '../../../../../lib/button';

const FooterSection = () => (
  <div className="row">
    <div className="row">
      {'Want us to build something for you? '}
      {'Great! We would love to!'}
      <Button href="https://codebrahma.com/contact/" flat >Let us know here!</Button>
    </div>
    <div className="bottom-bar">Made with <span className="heart">❤</span> by<a target="blank" href="https://www.codebrahma.com"><span>Codebrahma</span></a></div>
  </div>
);

export default FooterSection;
