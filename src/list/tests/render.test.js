import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import List from '..';

/* eslint-disable no-undef */
describe('List Render tests', () => {
  let wrappedComponent;

  const data = [
    'item 1',
    'item 2',
  ];

  beforeEach(() => {
    wrappedComponent = mount(<List items={data} />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Successfully renders the list.', () => {
    const expectedValue = 1;
    const simulatedValue = wrappedComponent.find(List).length;

    expect(simulatedValue).to.equal(expectedValue);
  });

  it('Successfully renders all items in a list.', () => {
    const expectedValue = 2;
    const simulatedValue = wrappedComponent.find('#list-view').children().length;

    expect(simulatedValue).to.equal(expectedValue);
  });
});
