import React from 'react';
import { mount } from 'enzyme';
import AutoComplete from '..';

/* eslint-disable no-undef */
describe('AutoComplete Edge case tests', () => {
  let wrappedComponent;
  const data = [
    { label: 'item 1' },
    { label: 'item 2' },
    { label: 'item 3' },
  ];

  beforeEach(() => {
    wrappedComponent = mount(<AutoComplete data={data} />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });
});
