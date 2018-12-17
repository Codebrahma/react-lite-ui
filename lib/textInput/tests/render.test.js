import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import TextInput from '..';

/* eslint-disable no-undef */
describe('TextInput Render tests', () => {
  let wrappedComponent;
  beforeEach(() => {
    wrappedComponent = mount(<TextInput />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Successfully renders TextInput component', () => {
    const expectedValue = 1;
    const simulatedValue = wrappedComponent.find(TextInput).length;

    expect(simulatedValue).equal(expectedValue);
  });

  it('Successfully renders input box inside wrapper.', () => {
    const expectedValue = 1;
    const simulatedValue = wrappedComponent.find('input').length;

    expect(simulatedValue).equal(expectedValue);
  });
});
