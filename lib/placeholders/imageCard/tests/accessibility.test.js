import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import ImageCardPlaceholder from '..';
import LinePlaceHolder from '../../line';

/* eslint-disable no-undef */
describe('ImageCardPlaceholder accessibility tests', () => {
  let wrappedComponent;

  beforeEach(() => {
    wrappedComponent = mount(<ImageCardPlaceholder imageShape="circle" />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('allows us to set props', () => {
    expect(wrappedComponent.props().imageShape).to.equal('circle');
    wrappedComponent.setProps({ imageShape: 'default' });
    expect(wrappedComponent.props().imageShape).to.equal('default');
  });

  it('should contain at least 4 `Line Placeholders` ', () => {
    expect(
      wrappedComponent.containsAllMatchingElements([
        <LinePlaceHolder />,
        <LinePlaceHolder />,
        <LinePlaceHolder />,
        <LinePlaceHolder />,
      ])
    ).to.equal(true);
  });
});
