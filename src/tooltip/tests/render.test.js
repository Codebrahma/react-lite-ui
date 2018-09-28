import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Tooltip from '..';

/* eslint-disable no-undef */
describe('Render Tooltip Component', () => {
  let wrappedComponent;
  let expectedValue;
  let actualValue;
  let expectedValueBefore;
  let expectedValueAfter;

  beforeEach(() => {
    wrappedComponent = mount(
      <Tooltip
        tooltipText='Some tip text'
        top
      >
        Tooltip Child
      </Tooltip>
    );
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  const simulateComponent = (simulator) => wrappedComponent.find('#tooltip_wrapper').simulate(simulator);

  it('Should render Tooltip component', () => {
    expectedValue = 'Tooltip';
    actualValue = () => wrappedComponent.name();
    expect(actualValue(), expectedValue);
  });
  
  it('Should have an id of tooltip_wrapper', () => {
    expectedValue = 1;
    actualValue = () => wrappedComponent.find('#tooltip_wrapper').length;
    expect(actualValue()).equal(expectedValue);
  });

  it('Should render children', () => {
    expectedValue = 1;
    wrappedComponent = shallow(<Tooltip tooltipText="text">Child</Tooltip>);
    expect(wrappedComponent.children()).to.have.length(expectedValue);
  });

  it('Should show tooltip on mouse enter', () => {
    expectedValueBefore = 0;
    expectedValueAfter = 1;
    actualValue = () => wrappedComponent.find('#tip').length;
    expect(actualValue()).equal(expectedValueBefore);
    simulateComponent('mouseenter');
    expect(actualValue()).equal(expectedValueAfter);
  });
  
  it('Should hide tooltip on mouse leave', () => {
    expectedValueBefore = 1;
    expectedValueAfter = 0;
    simulateComponent('mouseenter');
    actualValue = () => wrappedComponent.find('#tip').length;
    expect(actualValue()).equal(expectedValueBefore);
    simulateComponent('mouseleave');
    expect(actualValue()).equal(expectedValueAfter);
  });

  it('Should show tooltip on top', () => {
    expectedValueBefore = 1;
    expectedValueAfter = 0;
    simulateComponent('mouseenter');
    actualValue = () => wrappedComponent.find('.top').length;
    expect(actualValue()).equal(expectedValueBefore);
    simulateComponent('mouseleave');
    expect(actualValue()).equal(expectedValueAfter);
  });

});
