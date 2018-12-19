import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Card from '..';

/* eslint-disable no-undef */
describe('Card Accessibility tests', () => {
  let wrappedComponent;
  let expectedValue;
  let expectedValueBefore;
  let expectedValueAfter;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount(<Card header="Card Header">This is card body</Card>);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Shoud accept a footer prop and render footer accordingly', () => {
    expectedValue = 'Card footer';
    actualValue = () => wrappedComponent.find('div[aria-label="card-footer"]').props().children;
    wrappedComponent.setProps({ footer: 'Card footer' });
    expect(actualValue()).equal(expectedValue);
  });

  it('Shoud accept a actions prop and render footer accordingly', () => {
    expectedValueBefore = false;
    expectedValueAfter = 'Card actions';
    actualValue = () => wrappedComponent.find('div[aria-label="card-actions"]').props().children;
    expect(actualValue()).equal(expectedValueBefore);
    wrappedComponent.setProps({ actions: <div>Card actions</div> });
    expect(actualValue().props.children).equal(expectedValueAfter);
  });

  it('Should render header when passed as function.', () => {
    expectedValue = 'Function header';
    actualValue = () => wrappedComponent.find('div[aria-label="card-header"]');
    wrappedComponent.setProps({ header: () => <span>Function header</span> });
    expect(wrappedComponent
      .find(Card)
      .childAt(0)
      .children()
      .childAt(0)
      .text()).to.equal(expectedValue);
  });

  it('Should render expandedContent when passed as function.', () => {
    expectedValue = 'Function expandedContent';
    actualValue = () => wrappedComponent.find('div[aria-label="card-header"]');
    wrappedComponent.setProps({ expandedContent: () => <span>Function expandedContent</span> });
    expect(wrappedComponent.find('.expandedContent').text()).to.equal(expectedValue);
  });
});
