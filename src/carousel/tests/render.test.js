import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Carousel from '..';
import CarouselItem from '../carouselItem';

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

  it('Renders the Carousel component.', () => {
    const expectedValue = 1;

    const simulatedValue = wrappedComponent.find(Carousel).length;

    expect(simulatedValue).to.equal(expectedValue);
  });

  it('Successfully renders all carousel items.', () => {
    const expectedValue = data.length;

    const simulatedValue = wrappedComponent.find(CarouselItem).length;

    expect(simulatedValue).to.equal(expectedValue);
  });

  it('Successfully changes carousel item after intervals.', () => {
    const expectedValueBeforeChange = data[0];
    const expectedValueAfterChange = data[1];

    const simulatedValue = () => wrappedComponent.find('.current').props().children.props.src;

    expect(simulatedValue()).to.equal(expectedValueBeforeChange);
    setTimeout(() => {
      expect(simulatedValue()).to.equal(expectedValueAfterChange);
      done();
    }, 4000);
  });

  it('Successfully changes carousel item to first item after reaching last carousel item.', () => {
    const expectedValueBeforeChange = data[0];
    const expectedValueAfterChange = data[0];

    const simulatedValue = () => wrappedComponent.find('.current').props().children.props.src;

    expect(simulatedValue()).to.equal(expectedValueBeforeChange);
    setTimeout(() => {
      expect(simulatedValue()).to.equal(expectedValueAfterChange);
      done();
    }, 4000 * data.length);
  });
});
