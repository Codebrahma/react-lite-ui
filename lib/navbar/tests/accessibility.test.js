import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Navbar from '..';
import Avatar from '../../avatar';
import Button from '../../button';

/* eslint-disable no-undef */
describe('Navbar Render tests', () => {
  let wrappedComponent;
  let expectedValueBefore;
  let expectedValueAfter;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount(<Navbar>nav item</Navbar>);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should accept flat prop', () => {
    expectedValueBefore = false;
    expectedValueAfter = true;
    actualValue = () => wrappedComponent.find(Navbar).prop('flat');
    expect(actualValue()).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ flat: true });
    expect(actualValue()).to.equal(expectedValueAfter);
  });

  it('Should accept position prop to position the navbar', () => {
    expectedValueBefore = 'static';
    expectedValueAfter = 'fixed';
    actualValue = () => wrappedComponent.find(Navbar).prop('position');
    expect(actualValue()).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ position: 'fixed' });
    expect(actualValue()).to.equal(expectedValueAfter);
  });

  it('Should accept color prop to set background color', () => {
    expectedValueBefore = 'default';
    expectedValueAfter = 'light';
    actualValue = () => wrappedComponent.find(Navbar).prop('color');
    expect(actualValue()).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ color: 'light' });
    expect(actualValue()).to.equal(expectedValueAfter);
  });

  it('Should callback onLeftIconClick and onRightIconClick when clicked respectively', () => {
    expectedValueBefore = 0;
    expectedValueAfter = 1;
    const onLeftClick = sinon.spy();
    const onRightClick = sinon.spy();
    const simulateComponent = element => wrappedComponent.find(element).simulate('click');
    wrappedComponent.setProps({
      leftIcon: <Avatar>C</Avatar>,
      onLeftIconClick: onLeftClick,
      rightIcon: <Button>Login</Button>,
      onRightIconClick: onRightClick,
    });
    expect(onLeftClick).to.have.property('callCount', expectedValueBefore);
    simulateComponent(Avatar);
    expect(onLeftClick).to.have.property('callCount', expectedValueAfter);
    expect(onRightClick).to.have.property('callCount', expectedValueBefore);
    simulateComponent(Button);
    expect(onRightClick).to.have.property('callCount', expectedValueAfter);
  });
});
