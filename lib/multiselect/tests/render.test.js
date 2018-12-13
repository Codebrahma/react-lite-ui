import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import MultiSelect from '..';

/* eslint-disable no-undef */
describe('MultiSelect render test', () => {
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
    wrappedComponent.find('#multiselect-input').simulate('focus');
  };

  it('Successfully renders MultiSelect component', () => {
    const expectedValue = 1;
    expect(wrappedComponent
      .find(MultiSelect)
      .length).to.equal(expectedValue);
  });

  it('Successfully renders menu on input focus', () => {
    const expectedValue = 1;
    const simulatedValue = () => wrappedComponent.find(DROPDOWN_MENU).length;

    focusOnInput();
    expect(simulatedValue()).equal(expectedValue);
  });

  it('Successfully renders all data item provided.', () => {
    const expectedValue = data.length;
    const simulatedValue = () => wrappedComponent.find(DROPDOWN_MENU).children();

    focusOnInput();
    expect(simulatedValue()).to.have.lengthOf(expectedValue);
  });

  it('Successfully removes dropdown on remove focus', () => {
    const expectedValueBeforeBlur = 1;
    const expectedValueAfterBlur = 0;
    const simulatedValue = () => wrappedComponent.find(DROPDOWN_MENU).length;

    focusOnInput();
    expect(simulatedValue()).equal(expectedValueBeforeBlur);
    wrappedComponent.find('#multiselect-input').simulate('blur');
    expect(simulatedValue()).equal(expectedValueAfterBlur);
  });

  it('Successfully displays chip item for selected options', () => {
    const expectedValueBeforeSelection = 0;
    const SelectOptions = [0, 1];
    const expectedValueAfterSelection = SelectOptions.length;

    focusOnInput();
    expect(wrappedComponent
      .find('#selected-options')
      .children()).length(expectedValueBeforeSelection);
    SelectOptions
      .map(childIndex =>
        wrappedComponent
          .find(DROPDOWN_MENU)
          .childAt(childIndex)
          .simulate('click'));
    expect(wrappedComponent
      .find('#selected-options')
      .children().length).to.equal(expectedValueAfterSelection);
  });
});
