/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Drawer from '..';

/* eslint-disable no-undef */
describe('Drawer render tests.', () => {
  let wrappedComponent;
  let expectedValueBefore;
  let expectedValueAfter;
  let actualValue;

  class Demo extends React.Component {
    state = { open: false }

    handleDrawer(open) {
      this.setState({
        open,
      });
    }

    render() {
      const { open } = this.state;
      return (
        <div>
          <button type="button" id="drawerButton" onClick={() => this.handleDrawer(true)}>
            click me
          </button>
          <Drawer open={open} onClose={() => this.handleDrawer(false)} position="right">
            <div>content</div>
          </Drawer>
        </div>
      );
    }
  }

  beforeEach(() => {
    wrappedComponent = mount(<Demo />);
  });

  it('Should close drawer on blur', () => {
    expectedValueBefore = true;
    expectedValueAfter = false;
    actualValue = () => wrappedComponent.find(Drawer).prop('open');
    wrappedComponent.find('button#drawerButton').simulate('click');
    expect(actualValue()).equal(expectedValueBefore);
    wrappedComponent.find(Drawer).simulate('blur');
    expect(actualValue()).equal(expectedValueAfter);
  });

  it('Should get a callback for onClose prop', () => {
    expectedValueBefore = 0;
    expectedValueAfter = 1;
    const onClose = sinon.spy();
    wrappedComponent = mount(<Drawer />);
    wrappedComponent.setProps({ onClose });
    expect(onClose).to.have.property('callCount', expectedValueBefore);
    wrappedComponent.find(Drawer).simulate('blur');
    expect(onClose).to.have.property('callCount', expectedValueAfter);
  });
});
