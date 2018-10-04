import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import ListItem from '..';

/* eslint-disable no-undef */
describe('ListItem accessibility tests', () => {
  let wrappedComponent;
  let expectedValueBefore;
  let expectedValueAfter;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount(<ListItem>list item</ListItem>);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should accept a className prop', () => {
    expectedValueBefore = '';
    expectedValueAfter = 'custom_class';
    actualValue = () => wrappedComponent.props().className;
    expect(actualValue()).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ className: 'custom_class' });
    expect(actualValue()).to.equal(expectedValueAfter);
  });

  it('Should receive a callback when clicked', () => {
    expectedValueBefore = 0;
    expectedValueAfter = 1;
    const onClick = sinon.spy();
    wrappedComponent.setProps({ onClick });
    expect(onClick).to.have.property('callCount', expectedValueBefore);
    wrappedComponent.find(ListItem).simulate('click');
    expect(onClick).to.have.property('callCount', expectedValueAfter);
  });
});
