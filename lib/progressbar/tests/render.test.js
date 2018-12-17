import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import ProgressBar from '..';

/* eslint-disable no-undef */
describe('ProgressBar Render tests', () => {
  let wrappedComponent;
  let actualValue;
  let expectedValue;

  beforeEach(() => {
    wrappedComponent = mount(<ProgressBar />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should render ProgressBar component.', () => {
    expectedValue = 1;
    actualValue = wrappedComponent.find(ProgressBar).length;
    expect(actualValue).to.equal(expectedValue);
  });

  it('Should not render progress text by default.', () => {
    expectedValue = false;
    actualValue = wrappedComponent
      .find(ProgressBar)
      .children()
      .childAt(0)
      .props()
      .children;
    expect(actualValue[0]).to.equal(expectedValue);
    expect(actualValue[1].props['aria-label']).to.equal('progress');
  });
});
