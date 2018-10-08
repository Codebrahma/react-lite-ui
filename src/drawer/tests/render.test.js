import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Drawer from '..';

/* eslint-disable no-undef */
describe('Drawer render tests.', () => {
  let wrappedComponent;

  beforeEach(() => {
    wrappedComponent = mount(<Drawer />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Successfully renders Drawer component.', () => {
    const expectedValue = 1;

    expect(wrappedComponent.find(Drawer).length).to.equal(expectedValue);
  });

  it('Successfully renders all children.', () => {
    const expectedValue = 2;
    wrappedComponent = mount(<Drawer><span>1</span><span>2</span></Drawer>);

    expect(wrappedComponent
      .find(Drawer)
      .props()
      .children.length).to.equal(expectedValue);
  });
});
