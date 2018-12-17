import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import RadioButtonGroup from '..';

/* eslint-disable no-undef */
describe('RadioButtonGroup accessibility tests', () => {
  let wrappedComponent;
  let expectedValueBefore;
  let expectedValue;
  let expectedValueAfter;
  let actualValue;

  const options = [
    { label: 'Alpha' },
    { label: 'Beta' },
    { label: 'Zheta' },
  ];

  beforeEach(() => {
    wrappedComponent = mount(<RadioButtonGroup options={options} />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  const simulateComponent = index => wrappedComponent.find('#radio_button').at(index).simulate('click');

  it('Should update checked status effectively onClick', () => {
    expectedValueBefore = '';
    expectedValueAfter = 'Beta';
    actualValue = () => wrappedComponent.state().currentlyActive;
    expect(actualValue()).to.equal(expectedValueBefore);
    simulateComponent(1);
    expect(actualValue()).to.equal(expectedValueAfter);
  });

  it('Should have the latest clicked radio button as currently active', () => {
    expectedValueBefore = '';
    expectedValue = 'Alpha';
    expectedValueAfter = 'Zheta';
    actualValue = () => wrappedComponent.state().currentlyActive;
    expect(actualValue()).to.equal(expectedValueBefore);
    simulateComponent(0);
    expect(actualValue()).to.equal(expectedValue);
    simulateComponent(2);
    expect(actualValue()).to.equal(expectedValueAfter);
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
