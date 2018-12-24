import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Table from '..';

/* eslint-disable no-undef */
describe('Table Render tests', () => {
  let wrappedComponent;
  let expectedValue;
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

  it('Should render Table component', () => {
    expectedValue = 1;
    actualValue = wrappedComponent.find(Table).length;
    expect(actualValue).equal(expectedValue);
  });

  it('Should render table header', () => {
    expectedValue = 'table-header';
    actualValue = wrappedComponent
      .find(Table)
      .children()
      .childAt(0)
      .childAt(0)
      .props()
      .children;
    expect(actualValue[0].props['aria-label']).to.equal(expectedValue);
  });

  it('Should render table header with cells count equal to columns prop length', () => {
    expectedValue = 3;
    actualValue = wrappedComponent
      .find(Table)
      .children()
      .childAt(0)
      .childAt(0)
      .props()
      .children;
    expect(actualValue[0].props.children).to.have.lengthOf(expectedValue);
  });

  it('Should render table body', () => {
    expectedValue = 'table-body';
    actualValue = wrappedComponent
      .find(Table)
      .children()
      .childAt(0)
      .childAt(0)
      .props()
      .children;
    expect(actualValue[1].props['aria-label']).to.equal(expectedValue);
  });

  it('Should render table body with rows count equal to data prop length', () => {
    expectedValue = 2;
    actualValue = wrappedComponent
      .find(Table)
      .children()
      .childAt(0)
      .childAt(0)
      .props()
      .children;
    expect(actualValue[1].props.children).to.have.lengthOf(expectedValue);
  });

  it('Should render table row with cell count equal to column prop length', () => {
    expectedValue = 3;
    actualValue = wrappedComponent
      .find(Table)
      .children()
      .childAt(0)
      .childAt(0)
      .props()
      .children;
    expect(actualValue[1].props.children[0].props.children).to.have.lengthOf(expectedValue);
  });
});
