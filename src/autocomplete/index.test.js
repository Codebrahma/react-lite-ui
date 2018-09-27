import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import AutoComplete from './index';

/* eslint-disable no-undef */
describe('AutoComplete Component test', () => {
  let wrappedComponent;
  beforeEach(() => {
    wrappedComponent = mount(<AutoComplete data={[
        { label: 'item 1' },
        { label: 'item 2' },
        { label: 'item 3' },
    ]}
    />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Successfully renders AutoComplete component', () => {
    expect(wrappedComponent.find(AutoComplete).length).equal(1);
  });
});
