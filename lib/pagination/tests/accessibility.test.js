import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Pagination from '..';

/* eslint-disable no-undef */
describe('Pagination accessibility tests', () => {
  let wrappedComponent;

  beforeEach(() => {
    wrappedComponent = mount(<Pagination total={10} />);
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
});
