import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Avatar from './index';

/* eslint-disable no-undef */
describe('<Avatar />', () => {
  it('Should Render Avatar', () => {
    const wrapper = mount(<Avatar />);
    assert.strictEqual(wrapper.name(), 'ThemedAvatar');
  });
});
