import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Popover from '..';

/* eslint-disable no-undef */
describe('Popover Render tests', () => {
  let wrappedComponent;
  let expectedValue;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount( // eslint-disable-line
      <Popover content="this is popover content">
        <p>Click Me</p>
      </Popover>,
    ) // eslint-disable-line
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should render Popover component', () => {
    expectedValue = 1;
    actualValue = wrappedComponent.find(Popover).length;
    expect(actualValue).equal(expectedValue);
  });

  it('Should render popover content', () => {
    expectedValue = 'this is popover content';
    actualValue = wrappedComponent.find(Popover).prop('content');
    expect(actualValue).to.equal(expectedValue);
  });

  it('Should have actionContent as confirm by default', () => {
    expectedValue = 'confirm';
    actualValue = wrappedComponent.find(Popover).prop('actionContent');
    expect(actualValue).to.equal(expectedValue);
  });
});
