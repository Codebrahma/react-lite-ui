import React from 'react';
import { mount } from 'enzyme';
import { expect, assert } from 'chai';

import BoxPlaceholder from '..';

/* eslint-disable no-undef */
describe('BoxPlaceholder accessibility tests', () => {
  let wrappedComponent;
  let expectedValue;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount(<BoxPlaceholder shape="circle" />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('allows us to set props', () => {
    expect(wrappedComponent.props().shape).to.equal('circle');
    wrappedComponent.setProps({ shape: 'square' });
    expect(wrappedComponent.props().shape).to.equal('square');
  });

  it('should accept `Shape` prop', () => {
    expectedValue = 'circle';
    actualValue = () => wrappedComponent.prop('shape');
    assert.strictEqual(actualValue(), expectedValue);
  });
});
