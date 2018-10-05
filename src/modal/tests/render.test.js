import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Modal from '..';
import Button from '../../button';

/* eslint-disable no-undef */
describe('Modal render tests', () => {
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
      this.setState({
        open: true,
      });
    }

    render() {
      return (
        <div>
          <Button id="button" type="primary" onClick={this.toggleModal}>
            Click to Open Modal
          </Button>
          <Modal
            title="This is sample modal"
            body={<div>This is modal body</div>}
            footer="This is modal footer"
            open={this.state.open}
          />
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

  it('Successfully renders modal component to the DOM.', () => {
    const expectedValue = 1;
    const simulatedValue = wrappedComponent.find(Modal).length;

    expect(simulatedValue).to.equal(expectedValue);
  });

  it('successfully renders modal header.', () => {
    const expectedValue = 'card-header';
    const simulatedValue = () =>
      wrappedComponent
        .find('#modal')
        .childAt(0);

    toggleModal();
    expect(simulatedValue().prop('aria-label')).to.equal(expectedValue);
  });

  it('successfully renders modal footer.', () => {
    const expectedValue = 'card-footer';
    const simulatedValue = () => {
      const { length } = wrappedComponent.find('#modal').children();
      return wrappedComponent.find('#modal').childAt(length - 2);
    };

    toggleModal();
    expect(simulatedValue().prop('aria-label')).to.equal(expectedValue);
  });

  it('Successfully renders modal body prop.', () => {
    const unexpectedValue = 0;
    const simulatedValue = () => wrappedComponent
      .find('#modal')
      .childAt(1)
      .children();

    toggleModal();
    expect(simulatedValue()).to.not.have.length(unexpectedValue);
  });

  it('Successfully renders children when body prop not available', () => {
    /* eslint-disable react/no-multi-comp */
    class DemoModalWithChildren extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          open: false,
        };
        this.toggleModal = this.toggleModal.bind(this);
      }

      toggleModal() {
        this.setState({
          open: true,
        });
      }

      render() {
        return (
          <div>
            <Button id="button" type="primary" onClick={this.toggleModal}>
              Click to Open Modal
            </Button>
            <Modal
              title="This is sample modal"
              footer="This is modal footer"
              open={this.state.open}
            >
              <div>This is modal body</div>
            </Modal>
          </div>
        );
      }
    }
    wrappedComponent = mount(<DemoModalWithChildren />);
    const expectedValue = 1;
    const simulatedValue = () => wrappedComponent
      .find('#modal')
      .childAt(1)
      .children();

    toggleModal();
    expect(simulatedValue()).to.have.length(expectedValue);
  });
});
