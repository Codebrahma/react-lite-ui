import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Badge from '..';

/* eslint-disable no-undef */
describe('Badge edge case tests', () => {
  let wrappedComponent;
  let expectedValue;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount(<Badge />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('badgeCount is 0 by default', () => {
    wrappedComponent = mount(<Badge />);
    expectedValue = 0;
    actualValue = () => wrappedComponent.find('Badge').prop('badgeCount');
    expect(actualValue()).equal(expectedValue);
  });

  it('size is small by default', () => {
    wrappedComponent = mount(<Badge />);
    expectedValue = 'small';
    actualValue = () => wrappedComponent.find('Badge').prop('size');
    expect(actualValue()).equal(expectedValue);
  });
});
