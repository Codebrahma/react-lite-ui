import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import CheckboxGroup from '..';

/* eslint-disable no-undef */
describe('CheckboxGroup render tests', () => {
  let wrappedComponent;
  let expectedValue;
  let actualValue;

  const options = [
    { label: 'Alpha' },
    { label: 'Beta' },
    { label: 'Zheta' },
  ];

  beforeEach(() => {
    wrappedComponent = mount(<CheckboxGroup options={options} />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should Render CheckboxGroup Component', () => {
    expectedValue = 1;
    actualValue = () => wrappedComponent.find('CheckboxGroup').length;
    expect(actualValue()).equal(expectedValue);
  });

  it('Should render same number of checkboxes as length of options', () => {
    expectedValue = 3;
    actualValue = () => wrappedComponent.find('Checkbox').length;
    expect(actualValue()).equal(expectedValue);
  });

  it('Should render checkboxes with respective labels', () => {
    expectedValue = ['Alpha', 'Beta', 'Zheta'];
    wrappedComponent.props().options
      .forEach((option, index) => {
        actualValue = option.label;
        expect(actualValue).to.equal(expectedValue[index]);
      });
  });
});
