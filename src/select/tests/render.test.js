import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Select from '..';

/* eslint-disable no-undef */
describe('Select Render tests', () => {
  let wrappedComponent;
  const data = [{ label: 'item 1' }, { label: 'item 2' }, { label: 'item 3' }];

  const SELECT_LIST_SELECTOR = '#select-dropdown';

  const focusOnInput = () => {
    wrappedComponent
      .childAt(0)
      .children()
      .childAt(0)
      .simulate('click');
  };

  beforeEach(() => {
    wrappedComponent = mount(<Select options={data} />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Successfully renders Select component', () => {
    const expectedValue = 1;
    const simulatedValue = wrappedComponent.find(Select).length;

    expect(simulatedValue).equal(expectedValue);
  });

  it('Successfully renders menu on input focus', () => {
    const expectedValue = 1;
    const simulatedValue = () =>
      wrappedComponent.find(SELECT_LIST_SELECTOR).length;

    expect(simulatedValue()).equal(0);
    focusOnInput();
    expect(simulatedValue()).equal(expectedValue);
  });

  it('Successfully renders all data item provided.', () => {
    const expectedValue = data.length;
    const simulatedValue = () =>
      wrappedComponent.find(SELECT_LIST_SELECTOR).children();

    focusOnInput();
    expect(simulatedValue()).to.have.lengthOf(expectedValue);
  });

  it('Successfully removes dropdown on remove focus', () => {
    const expectedValueBeforeBlur = 1;
    const expectedValueAfterBlur = 0;
    const simulatedValue = () =>
      wrappedComponent.find(SELECT_LIST_SELECTOR).length;

    focusOnInput();
    expect(simulatedValue()).equal(expectedValueBeforeBlur);
    wrappedComponent
      .find(Select)
      .childAt(0)
      .children()
      .childAt(0)
      .simulate('blur');
    expect(simulatedValue()).equal(expectedValueAfterBlur);
  });
});
