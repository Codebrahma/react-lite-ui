import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import ImageCardPlaceholder from '..';

/* eslint-disable no-undef */
describe('Box placeholder render test', () => {
  let wrappedComponent;
  const expectedValue = 6;
  const actualValue = element => wrappedComponent.find(element).length;

  beforeEach(() => {
    wrappedComponent = mount(<ImageCardPlaceholder />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should render the ImageCardPlaceholder component', () => {
    expect(actualValue('div')).equal(expectedValue);
  });

  it('Should render a `ImageCardPlaceholder` with defalult `imageShape`', () => {
    expect(wrappedComponent.props().imageShape).to.equal('circle');
  });
});
