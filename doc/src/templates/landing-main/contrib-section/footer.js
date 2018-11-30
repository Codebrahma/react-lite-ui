import React from 'react';
import TextInput from '../../../../../src/textInput';

const FooterSection = () => (
  <div className="row">
    <div className="row">
      <div className="col">
        <p>Having Something in mind that we can build ?</p>
        <p>Submit your contact email.</p>
        <p>We will contact you back !</p>
      </div>
      <div className="divider" />
      <div className="col">
        <div className="row">
          <TextInput placeholder="Name" />
        </div>
        <div className="row">
          <TextInput placeholder="E-mail address" />
        </div>
      </div>
    </div>
  </div>
);

export default FooterSection;
