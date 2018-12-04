import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Modal from '..';
import Button from '../../button';

/* eslint-disable no-undef */
describe('Modal edge case tests', () => {
  let wrappedComponent;

  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false,
      };
      this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
      this.setState(prevState => ({
        open: !prevState.open,
      }));
    }

    render() {
      return (
        <div>
          <div>
            <Button id="button" type="primary" onClick={this.toggleModal}>
              Click to Open Modal
            </Button>
            <Modal
              onClose={this.toggleModal}
              title="This is sample modal"
              body="This is body content from body prop."
              footer="This is modal footer"
              open={this.state.open}
            >
              <div>This is modal body from children.</div>
            </Modal>
          </div>
        </div>
      );
    }
  }

  const toggleModal = () => {
    wrappedComponent.find('button').simulate('click');
  };

  beforeEach(() => {
    wrappedComponent = mount(<Demo />);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('Successfully renders children when both body prop and children are passed.', () => {
    const expectedValue = 'This is modal body from children.';
    const simulatedValue = () =>
      wrappedComponent
        .find('#modal')
        .childAt(1)
        .childAt(0)
        .text();

    toggleModal();
    expect(simulatedValue()).equals(expectedValue);
  });
});
