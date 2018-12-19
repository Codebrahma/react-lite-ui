import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Button from '..';

/* eslint-disable no-undef */
describe('Button Render tests', () => {
  let wrappedComponent;
  let expectedValue;
  let simulatedValue;

  beforeEach(() => {
    wrappedComponent = mount(<Button>Button</Button>);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Successfully renders Button component', () => {
    expectedValue = 1;
    simulatedValue = wrappedComponent.find(Button).length;

    expect(simulatedValue).equal(expectedValue);
  });

  it('Successfully renders Default children if no children are passed.', () => {
    expectedValue = 'Button';
    simulatedValue = wrappedComponent.find(Button).prop('children');

    expect(simulatedValue).to.equal(expectedValue);
  });

  it('Successfully renders children when children are passed', () => {
    expectedValue = 'Some button Text';
    wrappedComponent = mount(<Button>{expectedValue}</Button>);

    simulatedValue = wrappedComponent.find(Button).prop('children');

    expect(simulatedValue).to.equal(expectedValue);
  });

  it('Should render icon when passed as element', () => {
    expectedValue = 'element icon';
    wrappedComponent.setProps({ icon: <span className="test">element icon</span> });
    simulatedValue = wrappedComponent.find('span.test').text();
    expect(simulatedValue).equal(expectedValue);
  });

  it('Should render icon when passed as string', () => {
    expectedValue = 1;
    wrappedComponent.setProps({ icon: 'icon-menu' });
    simulatedValue = wrappedComponent.find('i.icon-menu').length;
    expect(simulatedValue).equal(expectedValue);
  });

  it('Should render anchor element when href is passed', () => {
    expectedValue = 1;
    wrappedComponent.setProps({
      href: 'https://random.link',
    });
    simulatedValue = wrappedComponent.find('a').length;
    expect(simulatedValue).equals(expectedValue);
  });
});
