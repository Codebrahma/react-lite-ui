import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Menu from '..';

/* eslint-disable no-undef */
describe('Menu Render tests', () => {
  let wrappedComponent;

  beforeEach(() => {
    wrappedComponent = mount(
      <Menu>
        <span>Option 1</span>
        <Menu submenu title="Submenu 1">
          <span>sub1-Option 1</span>
          <span>sub1-Option 2</span>
        </Menu>
        <Menu submenu title="Submenu 2">
          <span>sub2-Option1</span>
          <span>sub2-Option2</span>
          <Menu submenu title="Nested Submenu 1">
            <span>Option 1</span>
            <span>Option 2</span>
          </Menu>
          <Menu submenu title="Nested Submenu 2">
            <span>Option 1</span>
            <span>Option 2</span>
          </Menu>
        </Menu>
        <span>Option 2</span>
        <span>Option 3</span>
      </Menu>
    );
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Successfully renders Menu component', () => {
    const expectedValue = 'main-menu';
    const simulatedValue = wrappedComponent.childAt(0);

    expect(simulatedValue.prop('data-key')).to.equal(expectedValue);
  });

  it('Successfully renders all menu options inside a Menu component', () => {
    const expectedValue = 5;
    const simulatedValue = wrappedComponent
      .childAt(0)
      .childAt(0)
      .children().length;

    expect(simulatedValue).to.equal(expectedValue);
  });

  it('Successfully renders sub menu and sub menu options.', () => {
    const expectedValue = 'Submenu 1';
    const simulatedValue = wrappedComponent
      .childAt(0)
      .childAt(0)
      .childAt(1)
      .childAt(1)
      .childAt(0);

    expect(simulatedValue.prop('data-key')).to.equal(expectedValue);
    expect(simulatedValue.childAt(0).children()).to.have.lengthOf(2);
  });
});
