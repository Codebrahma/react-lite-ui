import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Badge from '..';
import Button from '../../button';

/* eslint-disable no-undef */
describe('Badge accessibility tests', () => {
  let wrappedComponent;
  let expectedValue;
  let expectedValueBefore;
  let expectedValueAfter;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount(<Badge><Button type="primary">Default</Button></Badge>);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should update badge count with badgeCount prop', () => {
    expectedValueBefore = 0;
    expectedValueAfter = 7;
    actualValue = () => wrappedComponent.find('Badge').prop('badgeCount');
    expect(actualValue()).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ badgeCount: 7 });
    expect(actualValue()).to.equal(expectedValueAfter);
  });

  it('Should accept size as prop', () => {
    expectedValue = 'large';
    actualValue = () => wrappedComponent.find('Badge').prop('size');
    wrappedComponent.setProps({ size: 'large' });
    expect(actualValue()).to.equal(expectedValue);
  });

  it('Should allow to pass any additional classNames', () => {
    expectedValue = true;
    actualValue = () => wrappedComponent.find('span');
    wrappedComponent.setProps({ className: 'badge_class' });
    expect(actualValue().hasClass('badge_class')).to.equal(expectedValue);
  });
});
