import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import CardPlaceholder from '..';

/* eslint-disable no-undef */
describe('CardPlaceholder render tests', () => {
  let wrappedComponent;
  const expectedValue = 7;
  const actualValue = element => wrappedComponent.find(element).length;

  beforeEach(() => {
    wrappedComponent = mount(<CardPlaceholder />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should render the `CardPlaceholder` component', () => {
    expect(actualValue('div')).equal(expectedValue);
  });

  it('Should render a `CardPlaceholder` with defalult `shape`', () => {
    expect(wrappedComponent.props().imageShape).to.equal('circle');
  });
});
