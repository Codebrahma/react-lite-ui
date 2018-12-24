import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Snackbar from '..';

// eslint-disable-next-line import/prefer-default-export
export class SnackDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSnackbar: false,
    };
    this.openBottomSnackbar = this.openBottomSnackbar.bind(this);
    this.handleSnackClose = this.handleSnackClose.bind(this);
  }

  openBottomSnackbar() {
    this.setState({
      showSnackbar: !this.state.showSnackbar,
    });
  }

  handleSnackClose() {
    this.setState({
      showSnackbar: false,
    });
  }

  render() {
    return (
      <div>
        <Snackbar
          active={this.state.showSnackbar}
          onClose={this.handleSnackClose}
        >
          <span>This is a bottom snackbar.</span>
        </Snackbar>
        <button onClick={this.openBottomSnackbar}>
          Open Bottom Snackbar
        </button>
      </div>
    );
  }
}

/* eslint-disable no-undef */
describe('Snackbar Render tests', () => {
  let wrappedComponent;

  beforeEach(() => {
    wrappedComponent = mount(<SnackDisplay />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Successfully renders snackbar.', () => {
    const expectedValue = 'snackbar';
    const simulatedValue = wrappedComponent
      .find(Snackbar)
      .childAt(0)
      .childAt(0)
      .prop('aria-label');

    expect(simulatedValue).equals(expectedValue);
  });

  it('Successfully renders snackbar on button click.', () => {
    const expectedValueBeforeDisplay = false;
    const expectedValueAfterDisplay = true;
    const simulatedValue = () => wrappedComponent
      .find(Snackbar)
      .childAt(0)
      .prop('active');

    expect(simulatedValue()).to.equal(expectedValueBeforeDisplay);
    wrappedComponent.find('button').simulate('click');
    expect(simulatedValue()).equals(expectedValueAfterDisplay);
  });

  it('Successfully renders snackbar.', () => {
    const simulatedValue = () => wrappedComponent.find('div.active').length;

    wrappedComponent.setState({ showSnackbar: false });
    wrappedComponent.setState({ showSnackbar: true });
    expect(simulatedValue()).equals(1);
    setTimeout(() => {
      expect(simulatedValue()).equals(0);
      done();
    }, 2000);
  });

  it('Should render snackbar by default when active prop is set to true by default', () => {
    const expectedValueBefore = true;
    const expectedValueAfter = false;
    const simulatedValue = () => wrappedComponent
      .find(Snackbar)
      .childAt(0)
      .prop('active');

    wrappedComponent = mount(<Snackbar active />);

    expect(simulatedValue()).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ active: false });
    expect(simulatedValue()).equals(expectedValueAfter);
  });
});
