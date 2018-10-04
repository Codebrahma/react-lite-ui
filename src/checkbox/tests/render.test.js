import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Checkbox from '..';

/* eslint-disable no-undef */
describe('Render Checkbox Component tests', () => {
  let wrappedComponent;
  let expectedValue;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount(<Checkbox />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should Render Checkbox Component', () => {
    expectedValue = 1;
    actualValue = () => wrappedComponent.find('Checkbox').length;
    expect(actualValue()).equal(expectedValue);
  });

  it('Should have an input element', () => {
    expectedValue = 1;
    actualValue = () => wrappedComponent.find('input').length;
    expect(actualValue()).equal(expectedValue);
  });

  it('Should have a span with className check-item', () => {
    expectedValue = true;
    actualValue = () => wrappedComponent.find('span').hasClass('check-item');
    expect(actualValue()).to.equal(expectedValue);
  });
});
