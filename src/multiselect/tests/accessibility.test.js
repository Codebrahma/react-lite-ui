import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import MultiSelect from '..';

/* eslint-disable no-undef */
describe('MultiSelect accessibility test', () => {
  let wrappedComponent;
  const data = [
    { label: 'Lorem' },
    { label: 'Ipsum' },
    { label: 'Dolor' },
    { label: 'Sit' },
    { label: 'Amet' },
    { label: 'Consectetur' },
    { label: 'Adipiscing' },
  ];
  const DROPDOWN_MENU = '#dropdown-options';

  beforeEach(() => {
    wrappedComponent = mount(<MultiSelect options={data} />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  const focusOnInput = () => {
    wrappedComponent.find('input').simulate('focus');
  };

  it('Successfully updates input on changing input value.', () => {
    const expectedValueBeforeChange = '';
    const expectedValueAfterChange = 'some random text';
    const simulatedValue = () => wrappedComponent.find('input').props().value;

    expect(simulatedValue()).to.equal(expectedValueBeforeChange);
    wrappedComponent.find('input').simulate('change', { target: { value: expectedValueAfterChange } });
    expect(simulatedValue()).to.equal(expectedValueAfterChange);
  });

  it('Successfully filters dropdown options according to input', () => {
    const expectedValue = 1;
    const simulatedValue = () => wrappedComponent.find(DROPDOWN_MENU).children();

    focusOnInput();
    wrappedComponent.find('input').simulate('change', { target: { value: 'lorem' } });
    expect(simulatedValue()).to.have.lengthOf(expectedValue);
  });

  it('Successfully selects first matching option on pressing Enter key.', () => {
    const inputValue = 'ip';
    const simulatedValue = () => wrappedComponent.find('#selected-options').childAt(0);

    const expectedValue = (data.filter(opt =>
      opt.label
        .toLowerCase()
        .indexOf(inputValue.toLowerCase()) !== -1)[0].label);

    focusOnInput();
    wrappedComponent
      .find('input')
      .simulate(
        'change',
        { target: { value: inputValue } },
      );
    wrappedComponent
      .find('input')
      .simulate('keydown', {
        key: 'Enter',
        keyCode: 13,
      });
    expect(simulatedValue().prop('aria-label')).to.equal(expectedValue);
  });

  it('Successfully selects option on click', () => {
    const expectedValueBeforeSelection = 0;
    const SelectOption = 1;
    const expectedValueAfterSelection = data[SelectOption].label;

    const simulatedValue = () => wrappedComponent.find('#selected-options').childAt(0);
    focusOnInput();
    expect(wrappedComponent
      .find('#selected-options')
      .children()).length(expectedValueBeforeSelection);
    wrappedComponent
      .find(DROPDOWN_MENU)
      .childAt(SelectOption)
      .simulate('click');
    expect(simulatedValue().prop('aria-label')).to.equal(expectedValueAfterSelection);
  });

  it('Successfully deselect option on second click.', () => {
    const expectedValueBeforeSelection = 0;
    const SelectOption = 1;
    const expectedValueBeforeDeselect = data[SelectOption].label;
    const expectedValueAfterDeselect = 0;

    const simulatedValue = () => wrappedComponent.find('#selected-options');

    focusOnInput();
    expect(wrappedComponent
      .find('#selected-options')
      .children()).length(expectedValueBeforeSelection);
    wrappedComponent
      .find(DROPDOWN_MENU)
      .childAt(SelectOption)
      .simulate('click');
    expect(simulatedValue().childAt(0).prop('aria-label')).to.equal(expectedValueBeforeDeselect);
    wrappedComponent
      .find(DROPDOWN_MENU)
      .childAt(SelectOption)
      .simulate('click');
    expect(simulatedValue().children().length).to.equal(expectedValueAfterDeselect);
  });

  it('Successfully remove item on chip close click.', () => {
    const expectedValueBeforeCloseClick = 1;
    const expectedValueAfterCloseClick = 0;
    const SelectOption = 1;
    const simulatedValue = () => wrappedComponent.find('#selected-options').children().length;

    focusOnInput();
    wrappedComponent
      .find(DROPDOWN_MENU)
      .childAt(SelectOption)
      .simulate('click');
    expect(simulatedValue()).to.equal(expectedValueBeforeCloseClick);
    wrappedComponent
      .find('#selected-options')
      .childAt(0)
      .childAt(0)
      .childAt(1)
      .simulate('click');
    expect(simulatedValue()).to.equal(expectedValueAfterCloseClick);
  });
});
