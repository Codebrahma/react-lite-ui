import React from 'react';
import { assert } from 'chai';
import { shallow, mount } from 'enzyme';
import Avatar from './index';

/* eslint-disable no-undef */
describe('Render Avatar Component', () => {
  let wrapper;
  it('Should Render Avatar', () => {
    wrapper = shallow(<Avatar />);
    assert.strictEqual(wrapper.name(), 'Avatar');
  });

  describe('Render image avatar', () => {

    beforeEach(() => {
      wrapper = mount(
        <Avatar 
          image="https://someurl.com/someimage"
          className="avatar-class"
        />
      )
    });

    afterEach(() => {
      wrapper.unmount();
    });
    
    it('image prop must be string', () => {
      assert.strictEqual(wrapper.prop('image'), 'https://someurl.com/someimage');
    });
    it('should accept className prop', () => {
      assert.strictEqual(wrapper.prop('className'), 'avatar-class');
    })
  });

  describe('Render text avatar', () => {
    it('should render avtar with a text', () => {
      const wrapper = shallow(
        <Avatar>
          CB
        </Avatar>
      );
      assert.strictEqual(wrapper.childAt(0).text(), 'CB');
    });
  });

});
