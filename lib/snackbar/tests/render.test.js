import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Snackbar from '..';
import Button from '../../button';

/* eslint-disable no-undef */
describe('Snackbar Render tests', () => {
  let wrappedComponent;

  class SnackDisplay extends React.Component {
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
          <div style={{ margin: '10px' }}>
            <Button type="primary" onClick={this.openBottomSnackbar}>
              Open Bottom Snackbar
            </Button>
          </div>
        </div>
      );
    }
  }

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
});
