import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Toggle from '..';

/* eslint-disable no-undef */
describe('Toggle edge case tests', () => {
  let wrappedComponent;
  let expectedValue;
  let actualValue;
  let expectedValueBefore;
  let expectedValueAfter;

  beforeEach(() => {
    wrappedComponent = mount(<Toggle />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  const simulateComponent = () => wrappedComponent.find('input').simulate('click');
  
  it('Should do  nothing when clicked', () => {
    expectedValueBefore = 0;
    expectedValueAfter = 0;
    actualValue = () => wrappedComponent.find('#toggled').length;
    expect(actualValue()).equal(expectedValueBefore);
    simulateComponent();
    expect(actualValue()).equal(expectedValueAfter);
  });

  it('toggled prop must be false by default', () => {
    expectedValue = false;
    actualValue = () => wrappedComponent.prop('toggled');
    expect(actualValue()).equal(expectedValue);
  });

  it('onClick prop must be undefined when not passed', () => {
    expectedValue = undefined;
    actualValue = () => wrappedComponent.prop('onClick')();
    expect(actualValue()).equal(expectedValue);
  });
});
