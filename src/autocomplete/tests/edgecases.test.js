import React from 'react';
import { mount } from 'enzyme';
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
    wrappedComponent = mount(<AutoComplete data={data} />);
  });

  afterEach(() => {
    // Unmount component after test.
    wrappedComponent.unmount();
  });
});
