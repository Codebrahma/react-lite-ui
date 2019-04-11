import React from 'react';
import { shallow } from 'enzyme';
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
  const ACCORDION_HEADING_SELECTOR = '#accordion-heading';
  const CONTENT_ELEMENT_SELECTOR = '#content-element';

  beforeEach(() => {
    wrappedComponent = shallow(<Accordion data={data} />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('onClick item is expended', () => {
    const childrenComponent = wrappedComponent.find(ACCCORDION_LIST_SELECTOR).children();
    childrenComponent.forEach((child) => {
      expect(child.exists(CONTENT_ELEMENT_SELECTOR)).to.equal(false);
      child.find(ACCORDION_HEADING_SELECTOR).simulate('click');
      expect(child.exists(CONTENT_ELEMENT_SELECTOR)).to.equal(true);
    });
  });
});
