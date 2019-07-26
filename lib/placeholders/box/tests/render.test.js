import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import BoxPlaceHolder from '..';

/* eslint-disable no-undef */
describe('Box placeholder render test', () => {
  let wrappedComponent;
  const expectedValue = 1;
  const actualValue = element => wrappedComponent.find(element).length;

  beforeEach(() => {
    wrappedComponent = mount(<BoxPlaceHolder />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should render the BoxPlaceholder component', () => {
    expect(actualValue('div')).equal(expectedValue);
  });

  it('Should render a `BoxPlaceholder` with defalult `shape`', () => {
    expect(wrappedComponent.props().shape).to.equal('square');
  });
});
