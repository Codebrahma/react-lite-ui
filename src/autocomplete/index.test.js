import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import AutoComplete from './index';

/* eslint-disable no-undef */
describe('AutoComplete Component test', () => {
  let wrappedComponent;
  const data = [
    { label: 'item 1' },
    { label: 'item 2' },
    { label: 'item 3' },
  ];

  const focusOnInput = () => {
    wrappedComponent.find('input').simulate('focus');
  };

  beforeEach(() => {
    wrappedComponent = mount(<AutoComplete data={data} />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Successfully renders AutoComplete component', () => {
    expect(wrappedComponent.find(AutoComplete).length).equal(1);
  });

  it('Successfully renders menu on input focus', () => {
    focusOnInput();
    expect(wrappedComponent.find('.autocomplete-list').length).equal(1);
  });

  it('Successfully renders all data item provided.', () => {
    focusOnInput();
    expect(wrappedComponent.find('.autocomplete-list').children()).to.have.lengthOf(data.length);
  });

  it('Successfully removes dropdown on remove focus', () => {
    focusOnInput();
    expect(wrappedComponent.find('.autocomplete-list').length).equal(1);
    wrappedComponent.find('input').simulate('blur');
    expect(wrappedComponent.find('.autocomplete-list')).to.have.lengthOf(0);
  });

  it('Successfully filters dropdown items according to input', () => {
    focusOnInput();
    wrappedComponent.find('input').simulate('change', { target: { value: '1' } });
    expect(wrappedComponent.find('.autocomplete-list').children()).to.have.lengthOf(1);
  });
});
