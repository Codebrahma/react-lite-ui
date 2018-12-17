import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Chip from '..';
import Avatar from '../../avatar';

/* eslint-disable no-undef */
describe('Chip accessibility tests', () => {
  let wrappedComponent;
  let expectedValueBefore;
  let expectedValue;
  let expectedValueAfter;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount(<Chip />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  const simulateComponent = element => wrappedComponent.find(element).simulate('click');

  it('Should update label prop effectively', () => {
    expectedValueBefore = 'default chip';
    expectedValueAfter = 'custom label';
    actualValue = () => wrappedComponent.props().label;
    expect(actualValue(Chip)).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ label: 'custom label' });
    expect(actualValue()).to.equal(expectedValueAfter);
  });

  it('Should accept avatar prop as string', () => {
    expectedValue = 'https://linkto.avatarimage.test';
    actualValue = () => wrappedComponent.find('img').props().src;
    wrappedComponent.setProps({ avatar: 'https://linkto.avatarimage.test' });
    expect(actualValue()).to.equal(expectedValue);
  });

  it('Should accept avatar prop as node', () => {
    expectedValue = 'function';
    actualValue = () => typeof wrappedComponent.props().avatar.type;
    wrappedComponent.setProps({ avatar: <Avatar>C</Avatar> });
    expect(actualValue()).to.equal(expectedValue);
  });

  it('Should accept size prop and update component accordingly', () => {
    expectedValueBefore = 'medium';
    expectedValueAfter = 'large';
    actualValue = () => wrappedComponent.props().size;
    expect(actualValue()).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ size: 'large' });
    expect(actualValue()).to.equal(expectedValueAfter);
  });

  it('Should accept color prop and update component accordingly', () => {
    expectedValueBefore = 'secondary';
    expectedValueAfter = 'danger';
    actualValue = () => wrappedComponent.props().color;
    expect(actualValue()).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ color: 'danger' });
    expect(actualValue()).to.equal(expectedValueAfter);
  });

  it('Should accept outlined prop as boolean', () => {
    expectedValueBefore = false;
    expectedValueAfter = true;
    actualValue = () => wrappedComponent.props().outlined;
    expect(actualValue()).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ outlined: true });
    expect(actualValue()).to.equal(expectedValueAfter);
  });

  it('Should give callback for handleChipClick funtion', () => {
    expectedValueBefore = 0;
    expectedValueAfter = 1;
    const onClick = sinon.spy();
    wrappedComponent.setProps({ handleChipClick: onClick });
    expect(onClick).to.have.property('callCount', expectedValueBefore);
    simulateComponent(Chip);
    expect(onClick).to.have.property('callCount', expectedValueAfter);
  });

  it('Should give callback for handleDelete funtion', () => {
    expectedValueBefore = 0;
    expectedValueAfter = 1;
    const onClick = sinon.spy();
    wrappedComponent.setProps({ handleDelete: onClick });
    expect(onClick).to.have.property('callCount', expectedValueBefore);
    simulateComponent('button');
    expect(onClick).to.have.property('callCount', expectedValueAfter);
  });
});
