import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Accordion from '..';

/* eslint-disable no-undef */
describe('Accordion Render tests', () => {
  let wrappedComponent;
  let expandedWrappedComponent;

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
  const HIDDEN_CONTENT_ELEMENT_SELECTOR = '#hidden-content-element';

  beforeEach(() => {
    wrappedComponent = mount(shallow(<Accordion data={data} />).get(0));
    expandedWrappedComponent = mount(
      shallow(<Accordion data={data} allowMultipleExpanded />).get(0),
    );
  });

  afterEach(() => {
    wrappedComponent.unmount();
    expandedWrappedComponent.unmount();
  });

  it('onClick item is expended', () => {
    const childrenComponent = wrappedComponent
      .find(ACCCORDION_LIST_SELECTOR)
      .children();
    childrenComponent.forEach((child) => {
      expect(child.exists(HIDDEN_CONTENT_ELEMENT_SELECTOR)).to.equal(true);
      child.find(ACCORDION_HEADING_SELECTOR).simulate('click');
      expect(wrappedComponent.state().expandedKeys.length).to.equals(1);
    });
  });
  it('onClick item is expended in allowMultipleExpanded.', () => {
    const count = data.length;
    const childrenComponent = expandedWrappedComponent
      .find(ACCCORDION_LIST_SELECTOR)
      .children();
    childrenComponent.forEach((child) => {
      child.find(ACCORDION_HEADING_SELECTOR).simulate('click');
    });
    expect(expandedWrappedComponent.state().expandedKeys.length).to.equal(
      count,
    );
  });
});
