import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import AutoComplete from '..';

/* eslint-disable no-undef */
describe('AutoComplete Accessibility tests', () => {
  // mounted AutoComplete component used for each tests.
  let wrappedComponent;
  // Data passed as prop to the autocomplete components as list of suggestions.
  const data = [
    { label: 'item 1' },
    { label: 'item 2' },
    { label: 'item 3' },
  ];

  // Simulates focus on the input component.
  const focusOnInput = () => {
    wrappedComponent.find('input').simulate('focus');
  };


  beforeEach(() => {
    // Mount root component before test.
    wrappedComponent = mount(<AutoComplete data={data} />);
  });

  afterEach(() => {
    // Unmount component after test.
    wrappedComponent.unmount();
  });

  it('Successfully updates input on changing input value.', () => {
    const expectedValueBeforeChange = '';
    const expectedValueAfterChange = 'item 1';
    const simulatedValue = () => wrappedComponent.find('input').props().value;

    expect(simulatedValue()).to.equal(expectedValueBeforeChange);
    wrappedComponent.find('input').simulate('change', { target: { value: expectedValueAfterChange } });
    expect(simulatedValue()).to.equal(expectedValueAfterChange);
  });

  it('Successfully changes input value on selecting an item from dropdown.', () => {
    const expectedValueBeforeClick = '';
    const expectedValueAfterClick = 'item 2';
    const childIndex = 1; // Index of the child component where click event needs to be simulated.
    const simulatedValue = () => wrappedComponent.find('input').props().value;

    expect(simulatedValue()).to.equal(expectedValueBeforeClick);
    focusOnInput();
    wrappedComponent.find('#autocomplete-list').childAt(childIndex).simulate('click');
    expect(simulatedValue()).to.equal(expectedValueAfterClick);
  });

  it('Successfully navigates to next item in list when down arrow key is pressed.', () => {
    const expectedValueBeforeKeyDown = 'inactive';
    const expectedValueAfterKeyDown = 'active';
    const childIndex = 2; // Child item index to navigate to.
    const simulatedValue = () => wrappedComponent.find('#autocomplete-list').childAt(childIndex).prop('aria-label');

    focusOnInput();
    expect(simulatedValue()).to.equal(expectedValueBeforeKeyDown);
    for (let i = childIndex; i >= 0; i -= 1) {
      wrappedComponent.find('input').simulate('keydown', {
        keyCode: 40,
        key: 'ArrowDown',
      });
    }
    expect(simulatedValue()).to.equal(expectedValueAfterKeyDown);
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
