import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import AutoComplete from '..';

/* eslint-disable no-undef */
describe('AutoComplete Render tests', () => {
  // mounted AutoComplete component used for each tests.
  let wrappedComponent;
  // Data passed as prop to the autocomplete components as list of suggestions.
  const data = [
    { label: 'item 1' },
    { label: 'item 2' },
    { label: 'item 3' },
  ];
  const AUTOCOMPLETE_LIST_SELECTOR = '#autocomplete-list';

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

  it('Successfully renders AutoComplete component', () => {
    // Expected value on focus.
    const expectedValue = 1;
    // Get mounted component.
    const simulatedValue = wrappedComponent.find(AutoComplete).length;

    // Check if successfully rendered.
    expect(simulatedValue).equal(expectedValue);
  });

  it('Successfully renders menu on input focus', () => {
    // Expected value on focus.
    const expectedValue = 1;
    // Dropdown component on focus.
    const simulatedValue = () => wrappedComponent.find(AUTOCOMPLETE_LIST_SELECTOR).length;

    // Simulate focus on input element which should render the dropdown.
    focusOnInput();
    // Check if dropdown rendered.
    expect(simulatedValue()).equal(expectedValue);
  });

  it('Successfully renders all data item provided.', () => {
    // Expected number of list items.
    const expectedValue = data.length;
    // All list items rendered on focus.
    const simulatedValue = () => wrappedComponent.find(AUTOCOMPLETE_LIST_SELECTOR).children();

    // Simulate focus on input element which should render all the children.
    focusOnInput();
    // Check if expected value is equal to the simulated value.
    expect(simulatedValue()).to.have.lengthOf(expectedValue);
  });

  it('Successfully removes dropdown on remove focus', () => {
    // Expected value on focus / before blur event on input component.
    const expectedValueBeforeBlur = 'enabled';
    // Expected value after blur event on input component.
    const expectedValueAfterBlur = '';
    // Length of the component before / after blur.
    const simulatedValue =
      () => wrappedComponent.find(AUTOCOMPLETE_LIST_SELECTOR).props().className;

    // Simulate focus on input element.
    focusOnInput();
    // Check if component is rendered.
    expect(simulatedValue()).equal(expectedValueBeforeBlur);
    // Simulate blur event on input component.
    wrappedComponent.find('input').simulate('blur');
    // Check if component is removed from view.
    expect(simulatedValue()).equal(expectedValueAfterBlur);
  });

  it('Successfully filters dropdown items according to input', () => {
    // Expected value after applying filter on input change.
    const expectedValue = 1;
    // Child elements rendered after filter.
    const simulatedValue = () => wrappedComponent.find(AUTOCOMPLETE_LIST_SELECTOR).children();

    // Simulate change on input component.
    focusOnInput();
    wrappedComponent.find('input').simulate('change', { target: { value: '1' } });
    // Check if items are filtered as expected.
    expect(simulatedValue()).to.have.lengthOf(expectedValue);
  });
});
