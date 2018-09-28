import React from 'react';
import { assert, expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Avatar from '../index';

/* eslint-disable no-undef */
describe('Render Avatar Component', () => {
  let wrappedComponent;
  let expectedValue;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount(
      <Avatar 
        image="https://someurl.com/someimage"
        className="avatar-class"
      />
    )
  });
  
  it('Should Render Avatar', () => {
    expectedValue = 'ThemedAvatar';
    actualValue = () => wrappedComponent.name();
    assert.strictEqual(actualValue(), expectedValue);
  });

  it('Should have an id of avatar', () => {
    expectedValue = 1;
    actualValue = () => wrappedComponent.find('#avatar').length;
    assert.strictEqual(actualValue(), expectedValue);
  });

  // Test cases to check image rendering in avatar component
  afterEach(() => {
    wrappedComponent.unmount();
  });
  
  it('should render avatar with image', () => {
    expectedValue = 'https://someurl.com/someimage';
    actualValue = () => wrappedComponent.prop('image');
    assert.strictEqual(actualValue(), expectedValue);
  });

  it('should accept className prop', () => {
    expectedValue = 'avatar-class';
    actualValue = () => wrappedComponent.prop('className');
    assert.strictEqual(actualValue(), expectedValue);
  })

  // Test cases to check text is rendered in avatar component
  it('should render avatar with a text', () => {
    wrappedComponent = shallow(
      <Avatar>
        CB
      </Avatar>
    );
    expectedValue = 'CB';
    actualValue = () => wrappedComponent.childAt(0).text();
    assert.strictEqual(actualValue(), expectedValue);
  });
});