import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import RadioButtonGroup from '..';

/* eslint-disable no-undef */
describe('RadioButtonGroup render tests', () => {
  let wrappedComponent;
  let expectedValue;
  let actualValue;

  const options = [
    { label: 'Alpha' },
    { label: 'Beta' },
    { label: 'Zheta' },
  ];

  beforeEach(() => {
    wrappedComponent = mount(<RadioButtonGroup options={options} />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should Render RadioButtonGroup Component', () => {
    expectedValue = 1;
    actualValue = () => wrappedComponent.find('RadioButtonGroup').length;
    expect(actualValue()).equal(expectedValue);
  });

  it('Should render same number of radio buttons as length of options', () => {
    expectedValue = 3;
    actualValue = () => wrappedComponent.find('#radio_button').length;
    expect(actualValue()).equal(expectedValue);
  });

  it('Should render radio buttons with respective labels', () => {
    expectedValue = ['Alpha', 'Beta', 'Zheta'];
    wrappedComponent.props().options
      .forEach((option, index) => {
        actualValue = option.label;
        expect(actualValue).to.equal(expectedValue[index]);
      });
  });
});
