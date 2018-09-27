import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Avatar from './index';

/* eslint-disable no-undef */
describe('<Avatar />', () => {
  it('Should Render Avatar', () => {
    const wrapper = shallow(<Avatar />);
    assert.strictEqual(wrapper.name(), 'Avatar');
  });
});
