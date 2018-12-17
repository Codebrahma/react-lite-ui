import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Button from '..';

/* eslint-disable no-undef */
describe('Button Render tests', () => {
  let wrappedComponent;

  beforeEach(() => {
    wrappedComponent = mount(<Button>Button</Button>);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Successfully renders Button component', () => {
    const expectedValue = 1;
    const simulatedValue = wrappedComponent.find(Button).length;

    expect(simulatedValue).equal(expectedValue);
  });

  it('Successfully renders Default children if no children are passed.', () => {
    const expectedValue = 'Button';
    const simulatedValue = wrappedComponent.find(Button).prop('children');

    expect(simulatedValue).to.equal(expectedValue);
  });

  it('Successfully renders children when children are passed', () => {
    const expectedChildren = 'Some button Text';
    wrappedComponent = mount(<Button>{expectedChildren}</Button>);

    const simulatedValue = wrappedComponent.find(Button).prop('children');

    expect(simulatedValue).to.equal(expectedChildren);
  });
});
