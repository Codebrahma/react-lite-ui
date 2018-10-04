import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Button from '..';

/* eslint-disable no-undef */
describe('Button Accessibility tests', () => {
  let wrappedComponent;

  it('Successfully triggers onClick on clicking the button.', () => {
    let simulatedValue = 0;
    const handleClick = () => {
      simulatedValue += 1;
    };
    const clickTimes = 2;

    wrappedComponent = mount(<Button onClick={handleClick} />);
    for (let i = 0; i < clickTimes; i += 1) {
      wrappedComponent.find(Button).simulate('click');
    }

    expect(simulatedValue).to.equal(clickTimes);
  });
});
