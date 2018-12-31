import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Modal from '..';
import Button from '../../button';

/* eslint-disable no-undef */
describe('Modal accessibility tests', () => {
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
      const { open } = this.state;
      return (
        <div>
          <Button id="button" type="primary" onClick={this.toggleModal}>
            Click to Open Modal
          </Button>
          <Modal onClose={this.toggleModal} title="This is sample modal" open={open} />
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

  it('Successfully displays modal with backdrop on toggle.', () => {
    const expectedValueBeforeToggle = 0;
    const expectedValueAfterToggle = 1;
    const simulatedValue = () => wrappedComponent.find('#modal').length;

    expect(simulatedValue()).equals(expectedValueBeforeToggle);
    toggleModal();
    expect(simulatedValue()).equals(expectedValueAfterToggle);
  });

  it('Successfully closes modal on clicking backdrop', (done) => {
    const expectedValueBeforeClosing = 1;
    const expectedValueAfterClosing = 0;
    const simulatedValue = () => wrappedComponent.find('#modal').length;

    toggleModal();
    expect(simulatedValue()).equals(expectedValueBeforeClosing);
    wrappedComponent
      .find(Modal)
      .childAt(0)
      .simulate('click');
    setTimeout(() => {
      expect(simulatedValue()).equals(expectedValueAfterClosing);
    }, 500);
    done();
  });

  it('Successfully closes modal on clicking close icon', (done) => {
    const expectedValueBeforeClosing = 1;
    const expectedValueAfterClosing = 0;
    const simulatedValue = () => wrappedComponent.find('#modal').length;

    toggleModal();
    expect(simulatedValue()).equals(expectedValueBeforeClosing);
    wrappedComponent
      .find('span.icon-cross')
      .simulate('click'); // Get the last child element, i.e, close icon.
    setTimeout(() => {
      expect(simulatedValue()).equals(expectedValueAfterClosing);
    }, 500);
    done();
  });
});
