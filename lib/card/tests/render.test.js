import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Card from '..';

/* eslint-disable no-undef */
describe('Card Render tests', () => {
  let wrappedComponent;

  beforeEach(() => {
    wrappedComponent = mount(<Card header="Card Header">This is card body</Card>);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Successfully renders card component.', () => {
    const expectedValue = 1;

    expect(wrappedComponent.find(Card).length).to.equal(expectedValue);
  });

  it('Successfully renders card header.', () => {
    expect(wrappedComponent
      .find(Card)
      .childAt(0)
      .children()
      .childAt(0)
      .prop('aria-label')).to.equal('card-header');

    expect(wrappedComponent
      .find(Card)
      .childAt(0)
      .children()
      .childAt(0)
      .text()).to.equal('Card Header');
  });

  it('Successfully renders all children of the component.', () => {
    const simulatedValue = wrappedComponent
      .find(Card)
      .childAt(0)
      .children()
      .props().children.length;

    expect(simulatedValue).to.not.equal(0);
    expect(simulatedValue).to.not.equal(1);
  });

  it('Successfully renders expandedContent on clicking expand button.', () => {
    const simulatedValue = () => wrappedComponent.find('.expanded').length;
    wrappedComponent.setProps({ expandedContent: <div>This is expanded content</div> });

    expect(simulatedValue()).to.equal(0);
    wrappedComponent.find('svg[aria-label="more-icon"]').simulate('click');
    expect(simulatedValue()).to.equal(1);
  });
});
