import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Pagination from '..';

/* eslint-disable no-undef */
describe('Pagination accessibility tests', () => {
  let wrappedComponent;
  let total = 10;

  beforeEach(() => {
    wrappedComponent = mount(<Pagination total={total} />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should change active item on clicking next', () => {
    const expectedValueBeforeChange = '1';
    const expectedValueAfterChange = '2';
    const simulatedValue = () => wrappedComponent.find('div[data-react-active-page="active"]').text();
    expect(simulatedValue()).to.equal(expectedValueBeforeChange);
    wrappedComponent.find('#next-button').simulate('click');
    expect(simulatedValue()).to.equal(expectedValueAfterChange);
  });

  it('Should not change the curentActive page when clicked on itself', () => {
    const simulatedValue = () => wrappedComponent.find('div[data-react-active-page="active"]').text();
    expect(simulatedValue()).equal('1');
    wrappedComponent.find('div[data-react-active-page="active"]').simulate('click');
    expect(simulatedValue()).equal('1');
  });

  it('Should navigate through pages correctly', () => {
    const simulatedValue = () => wrappedComponent.find('div[data-react-active-page="active"]').text();
    for (let page = 1; page <= total; page += 1) {
      expect(Number(simulatedValue())).equal(page);
      wrappedComponent.find('#next-button').simulate('click');
    }
    wrappedComponent.setProps({ defaultActive: total });
    for (let page = total; page >= 1; page -= 1) {
      expect(Number(simulatedValue())).equal(page);
      wrappedComponent.find('#prev-button').simulate('click');
    }
  });
});
