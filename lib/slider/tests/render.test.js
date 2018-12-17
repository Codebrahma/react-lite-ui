import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Slider from '..';

/* eslint-disable no-undef */
describe('Slider Render tests', () => {
  let wrappedComponent;
  let expectedValue;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount(<Slider />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should render Slider component.', () => {
    expectedValue = 'slider';
    actualValue = wrappedComponent
      .find(Slider)
      .childAt(0)
      .childAt(0)
      .prop('aria-label');

    expect(actualValue).equals(expectedValue);
  });

  it('Should render Slider Tracker.', () => {
    expectedValue = 'slider-tracker';
    actualValue = wrappedComponent
      .find(Slider)
      .childAt(0)
      .childAt(0)
      .childAt(0)
      .prop('aria-label');

    expect(actualValue).equals(expectedValue);
  });

  it('Should render Slider Buttons properly for normal and range sliders.', () => {
    actualValue = index => wrappedComponent
      .find(Slider)
      .childAt(0)
      .childAt(0)
      .childAt(index)
      .childAt(0)
      .prop('aria-label');

    // Should render one slider button on right by default
    expect(actualValue(0)).equals('slider-button-right');
    // Should render two slider buttons on left and right
    // When range prop is set to true
    wrappedComponent.setProps({ range: true });
    expect(actualValue(0)).equals('slider-button-left');
    expect(actualValue(1)).equals('slider-button-right');
  });

  it('Should render Slider offset with range slider.', () => {
    expectedValue = 'slider-offset';
    actualValue = () => wrappedComponent
      .find(Slider)
      .childAt(0)
      .childAt(0)
      .childAt(0)
      .prop('aria-label');

    // Should render slider tracker alone for normal slider
    expect(actualValue()).equals('slider-tracker');
    // Should have slider offset and slider tracker for range slider
    wrappedComponent.setProps({ range: true });
    expect(actualValue()).equals(expectedValue);
  });
});
