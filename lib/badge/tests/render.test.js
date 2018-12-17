import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Badge from '..';
import Button from '../../button';

/* eslint-disable no-undef */
describe('Badge render tests', () => {
  let wrappedComponent;
  let expectedValue;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount(<Badge><Button type="primary">Default</Button></Badge>);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should Render Badge Component', () => {
    expectedValue = 'ThemedBadge';
    actualValue = () => wrappedComponent.name();
    expect(actualValue()).equal(expectedValue);
  });

  it('Should render children', () => {
    expectedValue = 1;
    actualValue = () => wrappedComponent.find('Button').length;
    expect(actualValue()).equal(expectedValue);
  });

  it('Should render badge count', () => {
    expectedValue = 1;
    actualValue = () => wrappedComponent.find('#badge_count').length;
    expect(actualValue()).equal(expectedValue);
  });
});
