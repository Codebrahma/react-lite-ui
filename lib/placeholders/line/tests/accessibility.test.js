import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import LinePlaceholder from '..';

/* eslint-disable no-undef */
/* eslint-disable-next-line comma-dangle */

describe('LinePlaceholder accessibility tests', () => {
  let wrappedComponent;
  const expectedValue = 1;
  const actualValue = element => wrappedComponent.find(element).length;

  beforeEach(() => {
    wrappedComponent = mount(<LinePlaceholder lineWidth="100" />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('allows us to set props', () => {
    expect(wrappedComponent.props().lineWidth).to.equal('100');
    wrappedComponent.setProps({ lineWidth: '75' });
    expect(wrappedComponent.props().lineWidth).to.equal('75');
  });

  it('should have `lineWidth` prop and with value `100`', () => {
    expect(
      wrappedComponent
        .find('LinePlaceholder')
        .at(0)
        // eslint-disable-next-line comma-dangle
        .props().lineWidth
    ).to.equal('100');
  });

  it('should have only a single `div`', () => {
    expect(actualValue('div')).equal(expectedValue);
  });

  it('should render the `Line Placeholder` along with props ', () => {
    expect(wrappedComponent.contains(<div />)).to.equal(false);
  });

  it('should render the `Lard Placeholder` containing minimum 1 `div` element', () => {
    expect(wrappedComponent.containsAllMatchingElements([<div />])).to.equal(
      true
    );
  });
});
