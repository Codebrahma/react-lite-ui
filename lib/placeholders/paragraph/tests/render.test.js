import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import ParagraphPlaceholder from '..';

/* eslint-disable no-undef */
describe('ParagraphPlaceholder render tests', () => {
  let wrappedComponent;
  const expectedValue = 5;
  const actualValue = element => wrappedComponent.find(element).length;

  beforeEach(() => {
    wrappedComponent = mount(<ParagraphPlaceholder />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should render the ParagraphPlaceholder component', () => {
    expect(actualValue('div')).equal(expectedValue);
  });

  //   it('Should render a ParagraphPlaceholder with defalult lines', () => {
  //     expect(wrappedComponent.props().lines).to.equal(
  //      '['25', '50', '75', '100']'
  //     );
  //   });
});
