import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import List from '..';

/* eslint-disable no-undef */
describe('List Accessibility tests', () => {
  let wrappedComponent;

  const data = [
    'item 1',
    'item 2',
  ];

  it('Successfully fires on item click callback on list item click.', () => {
    let expectedValue;
    const childIndex = 1;
    const handleClick = (payload) => { expectedValue = payload; };
    wrappedComponent = mount(<List items={data} onItemClick={handleClick} />);
    wrappedComponent.find('#list-view').childAt(childIndex).simulate('click');
    expect(childIndex).equal(expectedValue);
  });
});
