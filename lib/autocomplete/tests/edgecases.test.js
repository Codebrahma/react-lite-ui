import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import AutoComplete from '..';

/* eslint-disable no-undef */
describe('AutoComplete Edge Cases tests', () => {
  // mounted AutoComplete component used for each tests.
  let wrappedComponent;
  // Data passed as prop to the autocomplete components as list of suggestions.
  const data = [
    { label: 'item 1' },
    { label: 'item 2' },
    { label: 'item 3' },
  ];

  beforeEach(() => {
    // Mount root component before test.
    wrappedComponent = mount(shallow(<AutoComplete data={data} />).get(0));
  });

  afterEach(() => {
    // Unmount component after test.
    wrappedComponent.unmount();
  });

  it('Successfully renders component with empty list.', () => {
    const expectedValue = 0;
    wrappedComponent.setProps({ data: [] });
    const simulatedValue = () => wrappedComponent
      .find('#autocomplete-list')
      .children().length;

    wrappedComponent.find('input').simulate('focus');
    expect(simulatedValue()).equal(expectedValue);
  });

  it('Shoud toggle blockOnBlur state on mouseneter and mountleave events', () => {
    const actualValue = () => wrappedComponent.state().blockOnBlur;
    wrappedComponent.find('#autocomplete-list').simulate('mouseenter');
    expect(actualValue()).to.equal(true);
    wrappedComponent.find('#autocomplete-list').simulate('mouseleave');
    expect(actualValue()).to.equal(false);
  });
});
