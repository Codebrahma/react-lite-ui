import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Accordion from '..';

/* eslint-disable no-undef */
describe('Accordion Render tests', () => {
  let wrappedComponent;

  const data = [
    { header: 'Lorem Ipsum is simply dummy text of ', content: 'Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry', key: '1' },
    { header: 'printing and typesetting industry', content: 'Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry', key: '2' },
  ];

  const ACCCORDION_LIST_SELECTOR = '#accordion-list';
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
  it('successfully renders all the data item provided.', () => {
    const expectedValue = data.length;
    const simulatedValue = () => wrappedComponent.find(ACCCORDION_LIST_SELECTOR).children();
    expect(simulatedValue()).to.have.lengthOf(expectedValue);
  });
});
