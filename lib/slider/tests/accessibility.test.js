import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Slider from '..';

/* eslint-disable no-undef */
describe('Slider Accessibility tests tests', () => {
  let wrappedComponent;

  // beforeEach(() => {
  // });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Is disabled when disabled prop is passed', () => {
    wrappedComponent = mount(<Slider disabled />);
    expect(wrappedComponent.props().disabled).equals(true);
  });
});
