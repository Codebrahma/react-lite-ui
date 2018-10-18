import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Preloader from '..';

/* eslint-disable no-undef */
describe('Preloader Render tests', () => {
  let wrappedComponent;
  let expectedValue;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount(<Preloader />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should render the Preloader component', () => {
    expectedValue = 1;
    actualValue = wrappedComponent.find(Preloader).length;
    expect(actualValue).to.equal(expectedValue);
  });

  it('Should render a hleper Loader component', () => {
    expectedValue = 1;
    actualValue = wrappedComponent.find('Loader').length;
    expect(actualValue).to.equal(expectedValue);
  });

  it('Should set the loader to circlesLoader by default', () => {
    expectedValue = 'circlesLoader';
    actualValue = wrappedComponent.prop('loader');
    expect(actualValue).to.equal(expectedValue);
  });

  it('Should set the size to medium by default', () => {
    expectedValue = 'medium';
    actualValue = wrappedComponent.prop('size');
    expect(actualValue).to.equal(expectedValue);
  });
});
