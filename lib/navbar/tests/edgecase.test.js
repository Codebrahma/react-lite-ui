/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { FaBars } from 'react-icons/fa';
import Navbar from '..';

describe('Navbar Edge case tests', () => {
  let wrappedComponent;

  beforeEach(() => {
    wrappedComponent = mount(shallow(<Navbar title="navbar">
      <span id="item-1">item 1</span>
      <span>item 2</span>
    </Navbar>).get(0));
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should show menu on menu icon click', () => {
    const simulatedValue = () => wrappedComponent.state().showMenu;
    expect(simulatedValue()).equals(false);
    wrappedComponent.find(FaBars).simulate('click');
    expect(simulatedValue()).equals(true);
  });

  it('Should hide menu on menu item click', () => {
    const simulatedValue = () => wrappedComponent.state().showMenu;
    wrappedComponent.find(FaBars).simulate('click');
    expect(simulatedValue()).equals(true);
    wrappedComponent.find('span#item-1').at(1).simulate('click');
    expect(simulatedValue()).equals(false);
  });

  it('Should remove menu on blur', () => {
    const simulatedValue = () => wrappedComponent.state().showMenu;
    wrappedComponent.find(FaBars).simulate('click');
    expect(simulatedValue()).equals(true);
    wrappedComponent.find(FaBars).simulate('blur');
    expect(simulatedValue()).equals(false);
  });
});
