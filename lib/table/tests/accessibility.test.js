import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Table from '..';

/* eslint-disable no-undef */
describe('Table accessibility tests', () => {
  let wrappedComponent;
  let expectedValueBefore;
  let expectedValueAfter;
  let actualValue;

  const columns = [
    { title: 'Name', key: 'name', colWidth: '150px' },
    { title: 'Default Value', key: 'defaultValue' },
    { title: 'Description', key: 'description' },
  ];

  const data = [
    {
      name: 'Name-1',
      defaultValue: 'first value',
      description: 'dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Name-2',
      defaultValue: 'second value',
      description: 'amet, consectetur dolor sit amet, consectetur adipiscing elit adipiscing elit.',
    },
  ];

  beforeEach(() => {
    wrappedComponent = mount(<Table columns={columns} data={data} />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Should render sort arrows when sort prop is passed', () => {
    expectedValueBefore = 0;
    expectedValueAfter = 3;
    actualValue = () => wrappedComponent.find('#table-sort').length;
    expect(actualValue()).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ sort: true });
    expect(actualValue()).to.equal(expectedValueAfter);
  });
});
