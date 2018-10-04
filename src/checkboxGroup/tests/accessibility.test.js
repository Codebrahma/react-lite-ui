import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import CheckboxGroup from '..';

/* eslint-disable no-undef */
describe('CheckboxGroup accessibility tests', () => {
  let wrappedComponent;
  let expectedValueBefore;
  let expectedValueAfter;
  let actualValue;

  const options = [
    { label: 'Alpha' },
    { label: 'Beta' },
    { label: 'Zheta' },
  ];

  beforeEach(() => {
    wrappedComponent = mount(<CheckboxGroup options={options} />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  const simulateComponent = index => wrappedComponent.find('Checkbox').at(index).find('input').simulate('click');

  it('Should update checked status effectively onClick', () => {
    expectedValueBefore = [false, false, false];
    expectedValueAfter = [true, false, true];
    const checkedStates = wrappedComponent.state().isChecked;
    Object.keys(checkedStates).forEach((state, index) => {
      actualValue = checkedStates[state];
      expect(actualValue).to.equal(expectedValueBefore[index]);
    });
    simulateComponent(0);
    simulateComponent(2);
    Object.keys(checkedStates).forEach((state, index) => {
      actualValue = checkedStates[state];
      expect(actualValue).to.equal(expectedValueAfter[index]);
    });
  });

  it('Should set the inline prop to true when passed, which is false by default', () => {
    expectedValueBefore = false;
    expectedValueAfter = true;
    actualValue = () => wrappedComponent.prop('inline');
    expect(actualValue()).equal(expectedValueBefore);
    wrappedComponent.setProps({ inline: true });
    expect(actualValue()).equal(expectedValueAfter);
  });
});
