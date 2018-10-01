import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Toggle from '..';

/* eslint-disable no-undef */
describe('Render Toggle Component tests', () => {
  let wrappedComponent;
  let expectedValue;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount(<Toggle />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should Render Toggle Component', () => {
    expectedValue = 1;
    actualValue = () => wrappedComponent.find('Toggle').length;
    expect(actualValue()).equal(expectedValue);
  });

  it('Should have an input element', () => {
    expectedValue = 1;
    actualValue = () => wrappedComponent.find('input').length;
    expect(actualValue()).equal(expectedValue);
  });

  it('Should have a span with className toggle-item', () => {
    expectedValue = true;
    actualValue = () => wrappedComponent.find('span').hasClass('toggle-item');
    expect(actualValue()).to.equal(expectedValue);
  });
});
