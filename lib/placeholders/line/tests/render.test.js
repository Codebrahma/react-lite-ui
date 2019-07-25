import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import LinePlaceholder from '..';

/* eslint-disable no-undef */
describe('LinePlaceholder render tests', () => {
  let wrappedComponent;
  const expectedValue = 1;
  const actualValue = element => wrappedComponent.find(element).length;

  beforeEach(() => {
    wrappedComponent = mount(<LinePlaceholder />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should render the LinePlaceholder component', () => {
    expect(actualValue('div')).equal(expectedValue);
  });

  it('Should render a LinePlaceholder with defalult lineWidth', () => {
    expect(wrappedComponent.props().lineWidth).to.equal('100');
  });
});
