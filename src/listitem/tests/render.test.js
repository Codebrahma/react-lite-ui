import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import ListItem from '..';

/* eslint-disable no-undef */
describe('ListItem Render tests', () => {
  let wrappedComponent;
  let expectedValue;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount(<ListItem>list item</ListItem>);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should render the ListItem', () => {
    expectedValue = 1;
    actualValue = wrappedComponent.find(ListItem).length;
    expect(actualValue).to.equal(expectedValue);
  });

  it('Should render the children of ListItem.', () => {
    expectedValue = 'list item';
    actualValue = wrappedComponent.find(ListItem).children().text();
    expect(actualValue).to.equal(expectedValue);
  });
});
