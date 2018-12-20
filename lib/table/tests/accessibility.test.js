import React from 'react';
import { mount, shallow } from 'enzyme';
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
    wrappedComponent = mount(shallow(<Table columns={columns} data={data} />).get(0));
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  const simulateSortClick = (col, index) => (
    wrappedComponent.find('#table-sort')
      .at(col)
      .find('span')
      .at(index)
      .simulate('click')
  );

  it('Should render sort arrows when sort prop is passed', () => {
    expectedValueBefore = 0;
    expectedValueAfter = 3;
    actualValue = () => wrappedComponent.find('#table-sort').length;
    expect(actualValue()).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ sort: true });
    expect(actualValue()).to.equal(expectedValueAfter);
  });

  it('Should render sort arrows when sort prop is passed', () => {
    expectedValueBefore = [true, false];
    expectedValueAfter = [false, true];
    wrappedComponent.setProps({ sort: true });
    simulateSortClick(0, 0);
    expect(wrappedComponent.state().nameAscending).equals(expectedValueBefore[0]);
    expect(wrappedComponent.state().nameDescending).equals(expectedValueBefore[1]);
    simulateSortClick(0, 1);
    expect(wrappedComponent.state().nameAscending).equals(expectedValueAfter[0]);
    expect(wrappedComponent.state().nameDescending).equals(expectedValueAfter[1]);
  });
});
