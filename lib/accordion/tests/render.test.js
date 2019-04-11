import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Accordion from '..';

/* eslint-disable no-undef */
describe('Accordion Render tests', () => {
  let wrappedComponent;

  const data = [
    {
      header: 'Lorem Ipsum is simply dummy text of ',
      content:
        'Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry',
      key: '1',
    },
    {
      header: 'printing and typesetting industry',
      content:
        'Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry',
      key: '2',
    },
  ];

  const ACCCORDION_LIST_SELECTOR = '#accordion-list';
  const ACCORDION_HEADING_SELECTOR = '#accordion-heading';
  const CONTENT_ELEMENT_SELECTOR = '#content-element';
  beforeEach(() => {
    wrappedComponent = mount(<Accordion data={data} />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Successfully renders Accordion component', () => {
    const expectedValue = 1;
    const simulatedValue = wrappedComponent.find(Accordion).length;
    expect(simulatedValue).equal(expectedValue);
  });
  it('Successfully renders all the data item provided.', () => {
    const expectedValue = data.length;
    const simulatedValue = () => wrappedComponent.find(ACCCORDION_LIST_SELECTOR).children();
    expect(simulatedValue()).to.have.lengthOf(expectedValue);
  });
  it('Successfully renders Accordion header.', () => {
    wrappedComponent
      .find(ACCCORDION_LIST_SELECTOR)
      .children()
      .forEach((child) => {
        expect(child.exists(ACCORDION_HEADING_SELECTOR)).to.equal(true);
      });
  });
  it('Successfully renders Accordion content.', () => {
    wrappedComponent
      .find(ACCCORDION_LIST_SELECTOR)
      .children()
      .forEach((child) => {
        expect(child.exists(CONTENT_ELEMENT_SELECTOR)).to.equal(false);
      });
  });
});
