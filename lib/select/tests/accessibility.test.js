import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Select from '..';

/* eslint-disable no-undef */
describe('Select Accessibility tests', () => {
  // mounted AutoComplete component used for each tests.
  let wrappedComponent;
  const data = [{ label: 'item 1' }, { label: 'item 2' }, { label: 'item 3' }];

  const SELECT_LIST_SELECTOR = '#select-dropdown';

  const focusOnInput = () => {
    wrappedComponent
      .childAt(0)
      .children()
      .childAt(0)
      .simulate('click');
  };

  beforeEach(() => {
    wrappedComponent = mount(<Select options={data} />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Successfully changes input value on selecting an item from dropdown.', () => {
    const expectedValueBeforeClick = '';
    const expectedValueAfterClick = 'item 2';
    const childIndex = 1; // Index of the child component where click event needs to be simulated.
    const simulatedValue = () => wrappedComponent.find('input').props().value;

    expect(simulatedValue()).to.equal(expectedValueBeforeClick);
    focusOnInput();
    wrappedComponent
      .find(SELECT_LIST_SELECTOR)
      .childAt(childIndex)
      .simulate('click');
    expect(simulatedValue()).to.equal(expectedValueAfterClick);
  });

  it('Successfully updates input through keyboard navigation.', () => {
    const expectedValueBeforeSelection = '';
    const expectedValueAfterSelection = 'item 2';
    const childIndex = 1; // Index for child item to be selected for input.
    const simulatedValue = () => wrappedComponent.find('input').props().value;

    focusOnInput();
    expect(simulatedValue()).to.equal(expectedValueBeforeSelection);
    for (let i = childIndex; i >= 0; i -= 1) {
      wrappedComponent.find('input').simulate('keydown', {
        keyCode: 40,
        key: 'ArrowDown',
      });
    }
    wrappedComponent.find('input').simulate('keydown', {
      keyCode: 13,
      key: 'Enter',
    });
    expect(simulatedValue()).to.equal(expectedValueAfterSelection);
  });
});
