import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Preloader from '..';

/* eslint-disable no-undef */
describe('Preloader accesibility tests', () => {
  let wrappedComponent;
  let expectedValueBefore;
  let expectedValueAfter;
  const actualValue = prop => wrappedComponent.find('Loader').prop(prop);

  beforeEach(() => {
    wrappedComponent = mount(<Preloader />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should accept a loader prop', () => {
    expectedValueBefore = 'circlesLoader';
    expectedValueAfter = 'dotsLoader';
    expect(actualValue('loader')).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ loader: 'dotsLoader' });
    expect(actualValue('loader')).to.equal(expectedValueAfter);
  });

  it('Should accept a color prop', () => {
    expectedValueBefore = undefined;
    expectedValueAfter = 'success';
    expect(actualValue('color')).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ color: 'success' });
    expect(actualValue('color')).to.equal(expectedValueAfter);
  });

  it('Should accept a size prop', () => {
    expectedValueBefore = 'medium';
    expectedValueAfter = 'large';
    expect(actualValue('size')).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ size: 'large' });
    expect(actualValue('size')).to.equal(expectedValueAfter);
  });
});
