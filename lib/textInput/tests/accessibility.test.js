import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import TextInput from '..';

/* eslint-disable no-undef */
describe('TextInput Accessibility tests', () => {
  let wrappedComponent;

  class DemoInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
      };
    }
    render() {
      const { input } = this.state;
      return (
        <TextInput
          value={input}
          onChange={({ target }) => this.setState({ input: target.value })}
        />
      );
    }
  }

  beforeEach(() => {
    wrappedComponent = mount(<DemoInput />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Successfully updates input on changing input value.', () => {
    const expectedValueBeforeChange = '';
    const expectedValueAfterChange = 'item 1';
    const simulatedValue = () => wrappedComponent.find('input').props().value;

    expect(simulatedValue()).to.equal(expectedValueBeforeChange);
    wrappedComponent
      .find('input')
      .simulate('change', { target: { value: expectedValueAfterChange } });
    expect(simulatedValue()).to.equal(expectedValueAfterChange);
  });
});
