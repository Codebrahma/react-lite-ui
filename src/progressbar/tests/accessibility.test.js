import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import ProgressBar from '..';

/* eslint-disable no-undef */
describe('ProgressBar accessibility tests', () => {
  let wrappedComponent;
  let expectedValueBefore;
  let expectedValueAfter;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount(<ProgressBar />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should render progress text when showProgressText is set to true.', () => {
    expectedValueBefore = false;
    expectedValueAfter = 'progress-text';
    actualValue = () => wrappedComponent
      .find(ProgressBar)
      .children()
      .childAt(0)
      .props()
      .children;
    expect(actualValue()[0]).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ showProgressText: true });
    expect(actualValue()[0].props['aria-label']).to.equal(expectedValueAfter);
    expect(actualValue()[1].props['aria-label']).to.equal('progress');
  });

  it('Should accept a type prop to define color.', () => {
    expectedValueBefore = 'primary';
    expectedValueAfter = 'success';
    actualValue = () => wrappedComponent
      .find(ProgressBar)
      .prop('type');
    expect(actualValue()).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ type: 'success' });
    expect(actualValue()).to.equal(expectedValueAfter);
  });

  it('Should accept a progress prop to update progress effectively.', () => {
    expectedValueBefore = 0;
    let progress = 0;
    actualValue = () => wrappedComponent
      .find(ProgressBar)
      .prop('progress');
    expect(actualValue()).to.equal(expectedValueBefore);
    while (progress < 100) {
      wrappedComponent.setProps({ progress });
      expectedValueAfter = progress;
      expect(actualValue()).to.equal(expectedValueAfter);
      progress += 1;
    }
  });
});
