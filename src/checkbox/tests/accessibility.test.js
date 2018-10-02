import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Checkbox from '..';

/* eslint-disable no-undef */
describe('Checkbox accessibility tests', () => {
  let wrappedComponent;
  let expectedValue;
  let actualValue;
  let expectedValueBefore;
  let expectedValueAfter;

  class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        checked: false,
      };
    }

    handleCheckClick = () => {
      this.setState(prevState => ({
        checked: !prevState.checked,
      }));
    }

    render() {
      return (
        <Checkbox
          checked={this.state.checked}
          onClick={this.handleCheckClick}
          label="input_check"
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

  it('Should toggle the id checked onClick', () => {
    expectedValueBefore = false;
    expectedValueAfter = true;
    actualValue = () => wrappedComponent.find('Checkbox').prop('checked');
    expect(actualValue()).equal(expectedValueBefore);
    simulateComponent();
    expect(actualValue()).equal(expectedValueAfter);
  });

  it('Should accept label prop', () => {
    wrappedComponent = shallow(<Checkbox label="input_check" />);
    expectedValue = 'input_check';
    actualValue = () => wrappedComponent.prop('label');
    expect(actualValue()).equal(expectedValue);
  });

  it('Should set the label prop value to name attribute when no name prop is passed', () => {
    expectedValue = 'input_check';
    actualValue = () => wrappedComponent.find('input').props().name;
    expect(actualValue()).to.equal(expectedValue);
  });

  it('Should accept name prop and overwrite any other value set by label prop as default', () => {
    wrappedComponent = mount(<Checkbox label="input_check" />);
    expectedValueBefore = 'input_check';
    expectedValueAfter = 'check_name';
    actualValue = () => wrappedComponent.find('input').props().name;
    expect(actualValue()).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ name: 'check_name' });
    expect(actualValue()).to.equal(expectedValueAfter);
  });

  it('Should callback the same number of times its clicked', () => {
    expectedValueBefore = 0;
    expectedValueAfter = 2;
    const onClick = sinon.spy();
    wrappedComponent = mount(<Checkbox onClick={onClick} />);
    expect(onClick).to.have.property('callCount', expectedValueBefore);
    simulateComponent();
    simulateComponent();
    expect(onClick).to.have.property('callCount', expectedValueAfter);
  });
});
