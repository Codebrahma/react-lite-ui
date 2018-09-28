import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Tooltip from '..';

/* eslint-disable no-undef */
describe('Render Tooltip Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Tooltip
        tooltipText='Some tip text'
        top
      >
        Tooltip Child
      </Tooltip>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('Should render Tooltip component', () => {
    expect(wrapper.name(), 'Tooltip');
  });

  it('Should render children', () => {
    const wrappedComponent = shallow(<Tooltip tooltipText="text">Child</Tooltip>)
    expect(wrappedComponent.children()).to.have.length(1);
  });

});
