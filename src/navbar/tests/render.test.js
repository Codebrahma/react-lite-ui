import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Navbar from '..';
import Avatar from '../../avatar';
import TextInput from '../../textInput';

/* eslint-disable no-undef */
describe('Navbar Render tests', () => {
  let wrappedComponent;
  let expectedValue;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount(<Navbar>nav item</Navbar>);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should render the Navbar', () => {
    expectedValue = 1;
    actualValue = wrappedComponent.find(Navbar).length;
    expect(actualValue).to.equal(expectedValue);
  });

  it('Should render title as string', () => {
    expectedValue = 'navbar';
    actualValue = () => wrappedComponent.find(Navbar).prop('title');
    expect(actualValue()).to.equal(expectedValue);
  });

  it('Should render title as element', () => {
    expectedValue = 'h1';
    actualValue = () => wrappedComponent.find(Navbar).prop('title').type;
    wrappedComponent.setProps({ title: <h1>Logo Element</h1> });
    expect(actualValue()).to.equal(expectedValue);
  });

  it('Should render leftIcon and rightIcon as elements', () => {
    const expectedValueLeft = 'ThemedAvatar';
    const expectedValueRight = 'ThemedTextInput';
    actualValue = prop => wrappedComponent.find(Navbar).prop(prop).type.displayName;
    wrappedComponent.setProps({ leftIcon: <Avatar>C</Avatar> });
    expect(actualValue('leftIcon')).to.equal(expectedValueLeft);
    wrappedComponent.setProps({ rightIcon: <TextInput /> });
    expect(actualValue('rightIcon')).to.equal(expectedValueRight);
  });
});
