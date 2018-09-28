import React from 'react';
import { assert } from 'chai';
import { shallow, mount } from 'enzyme';
import Avatar from '../index';

/* eslint-disable no-undef */
describe('Render Avatar Component', () => {
  let wrappedComponent;
  it('Should Render Avatar', () => {
    wrappedComponent = shallow(<Avatar />);
    assert.strictEqual(wrappedComponent.name(), 'Avatar');
  });

  describe('Render image avatar', () => {

    beforeEach(() => {
      wrappedComponent = mount(
        <Avatar 
          image="https://someurl.com/someimage"
          className="avatar-class"
        />
      )
    });

    afterEach(() => {
      wrappedComponent.unmount();
    });
    
    it('image prop must be string', () => {
      assert.strictEqual(wrappedComponent.prop('image'), 'https://someurl.com/someimage');
    });
    it('should accept className prop', () => {
      assert.strictEqual(wrappedComponent.prop('className'), 'avatar-class');
    })
  });

  describe('Render text avatar', () => {
    it('should render avtar with a text', () => {
      const wrappedComponent = shallow(
        <Avatar>
          CB
        </Avatar>
      );
      assert.strictEqual(wrappedComponent.childAt(0).text(), 'CB');
    });
  });

});
