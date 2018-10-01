import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Toggle from '..';

/* eslint-disable no-undef */
describe('Toggle accessibility tests', () => {
  let wrappedComponent;
  let expectedValue;
  let actualValue;
  let expectedValueBefore;
  let expectedValueAfter;

  class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        toggled: false,
      };
      this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
      this.setState(prevState => ({
        toggled: !prevState.toggled,
      }));
    }

    render() {
      return (
        <Toggle
          toggled={this.state.toggled}
          onClick={this.handleToggle}
          label="input_toggle"
        />
      );
    }
  }

  beforeEach(() => {
    wrappedComponent = mount(<App />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  const simulateComponent = () => wrappedComponent.find('input').simulate('click');

  it('Should toggle the className toggled onClick', () => {
    expectedValueBefore = 0;
    expectedValueAfter = 1;
    actualValue = () => wrappedComponent.find('#toggled').length;
    expect(actualValue()).equal(expectedValueBefore);
    simulateComponent();
    expect(actualValue()).equal(expectedValueAfter);
  });

  it('Should accept label prop', () => {
    wrappedComponent = shallow(<Toggle label="input_toggle" />);
    expectedValue = 'input_toggle';
    actualValue = () => wrappedComponent.prop('label');
    expect(actualValue()).equal(expectedValue);
  });

  it('Should set the label prop value to name attribute when no name prop is passed', () => {
    expectedValue = 'input_toggle';
    actualValue = () => wrappedComponent.find('input').props().name;
    expect(actualValue()).to.equal(expectedValue);
  });

  it('Should accept name prop and overwrite any other value set by label prop as default', () => {
    wrappedComponent = shallow(<Toggle name="toggle_name" label="input_toggle" />);
    expectedValue = 'toggle_name';
    actualValue = () => wrappedComponent.prop('name');
    expect(actualValue()).equal(expectedValue);
  });

  it('Should callback the same number of times its clicked', () => {
    expectedValueBefore = 0;
    expectedValueAfter = 2;
    const onClick = sinon.spy();
    wrappedComponent = mount(<Toggle onClick={onClick} />);
    expect(onClick).to.have.property('callCount', expectedValueBefore);
    simulateComponent();
    simulateComponent();
    expect(onClick).to.have.property('callCount', expectedValueAfter);
  });
});
