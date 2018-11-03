import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Carousel from '..';

/* eslint-disable no-undef */
describe('Carousel Render tests', () => {
  // mounted AutoComplete component used for each tests.
  let wrappedComponent;

  const data = [
    'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=wood-landscape-sky-371633.jpg&fm=jpg',
    'https://hanslodge.com/images/pTqrL9Rec.jpg',
  ];

  beforeEach(() => {
    // Mount root component before test.
    wrappedComponent = mount(<Carousel data={data} />);
  });

  afterEach(() => {
    // Unmount component after test.
    wrappedComponent.unmount();
  });

  it('Successfullly changes carousel item on button click.', () => {
    const expectedValueBeforeChange = data[0];
    const expectedValueAfterChange = data[1];

    const simulatedValue = () =>
      wrappedComponent.find('.current').props().children.props.src;

    expect(simulatedValue()).to.equal(expectedValueBeforeChange);
    wrappedComponent.find('.icon-right').simulate('click');
    expect(simulatedValue()).to.equal(expectedValueAfterChange);
  });

  it('Successfully changes carousel item on clicking carousel indicators.', () => {
    const expectedValueBeforeChange = data[0];
    const expectedValueAfterChange = data[1];

    const simulatedValue = () =>
      wrappedComponent.find('.current').props().children.props.src;

    expect(simulatedValue()).to.equal(expectedValueBeforeChange);
    // Simulate click on dot indicator for second carousel item.
    wrappedComponent.find('#indicator').childAt(1).simulate('click');
    expect(simulatedValue()).to.equal(expectedValueAfterChange);
  });
});
