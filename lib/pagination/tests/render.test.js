import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Pagination from '..';

/* eslint-disable no-undef */
describe('Pagination Render tests', () => {
  let wrappedComponent;
  let expectedValue;

  beforeEach(() => {
    wrappedComponent = mount(<Pagination total={10} />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should render pagination component', () => {
    expectedValue = 1;
    const simulatedValue = wrappedComponent.find(Pagination).length;
    expect(simulatedValue).to.equal(expectedValue);
  });

  it('Should render default active page as 1', () => {
    expectedValue = '1';
    const simulatedValue = wrappedComponent.find('div[data-react-active-page="active"]').text();
    expect(simulatedValue).to.equal(expectedValue);
  });
});
