import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Badge from '..';

/* eslint-disable no-undef */
describe('Badge console error tests', () => {
  let expectedValue;
  let actualValue;

  beforeEach(() => {
    sinon.stub(console, 'error');
  });

  afterEach(() => {
    console.error.restore();
  });

  it('Should throw console error when no children is provided', () => {
    expectedValue = true;
    shallow(<Badge />);
    actualValue = console.error.called;
    expect(actualValue).to.equal(expectedValue);
  });
});
