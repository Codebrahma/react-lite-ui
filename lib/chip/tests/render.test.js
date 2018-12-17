import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Chip from '..';

/* eslint-disable no-undef */
describe('Chip Render tests', () => {
  let wrappedComponent;
  const expectedValue = 1;
  const actualValue = element => wrappedComponent.find(element).length;

  beforeEach(() => {
    wrappedComponent = mount(<Chip />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should render Chip component.', () => {
    expect(actualValue(Chip)).equal(expectedValue);
  });

  it('Should render a chip with defalult label', () => {
    expect(actualValue('span')).equal(expectedValue);
    expect(wrappedComponent.props().label).equal('default chip');
  });

  it('Should render a chip with div if not clickable', () => {
    expect(actualValue('div')).equal(expectedValue);
  });

  it('Should render a chip with anchor tag if clickable', () => {
    wrappedComponent.setProps({ handleChipClick: () => {} });
    expect(actualValue('a')).equal(expectedValue);
  });

  it('Should render a chip with delete button when handleDelete prop is passed', () => {
    wrappedComponent.setProps({ handleDelete: () => {} });
    expect(actualValue('button')).equal(expectedValue);
  });
});
