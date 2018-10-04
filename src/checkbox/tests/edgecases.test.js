import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Checkbox from '..';

/* eslint-disable no-undef */
describe('Checkbox edge case tests', () => {
  let wrappedComponent;
  let expectedValue;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount(<Checkbox />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  const simulateComponent = () => wrappedComponent.find('input').simulate('click');

  it('Should do nothing when clicked without passing any checked state', () => {
    expectedValue = false;
    actualValue = () => wrappedComponent.find('Checkbox').prop('checked');
    expect(actualValue()).equal(expectedValue);
    simulateComponent();
    expect(actualValue()).equal(expectedValue);
  });

  it('checked prop must be false by default', () => {
    expectedValue = false;
    actualValue = () => wrappedComponent.prop('checked');
    expect(actualValue()).equal(expectedValue);
  });

  it('onClick prop must be undefined when not passed', () => {
    expectedValue = undefined;
    actualValue = () => wrappedComponent.prop('onClick')();
    expect(actualValue()).equal(expectedValue);
  });
});
