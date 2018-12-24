import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Popover from '..';

/* eslint-disable no-undef */
describe('Popover edge case tests', () => {
  let wrappedComponent;
  let expectedValue;
  let expectedValueBefore;
  let expectedValueAfter;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount(shallow( // eslint-disable-line
      <Popover content="this is popover content">
        <p>Click Me</p>
      </Popover>,
    ).get(0),
    ) // eslint-disable-line
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  const simulateEvent = (component, event) => wrappedComponent.find(component).simulate(event);

  it('Should toggle blockBlurEvent state properly on mouseenter and mouse leave', () => {
    expectedValueBefore = true;
    expectedValueAfter = false;
    actualValue = () => wrappedComponent.state().blockBlurEvent;
    simulateEvent('p', 'click');
    simulateEvent('div[aria-label="popover-content"]', 'mouseenter');
    expect(actualValue()).to.equal(expectedValueBefore);
    simulateEvent('div[aria-label="popover-content"]', 'mouseleave');
    expect(actualValue()).to.equal(expectedValueAfter);
  });

  it('Should callback the onConfirm when onConfirm prop is passed', () => {
    expectedValueBefore = 0;
    expectedValueAfter = 1;
    const onConfirm = sinon.spy();
    simulateEvent('p', 'click');
    expect(onConfirm).to.have.property('callCount', expectedValueBefore);
    wrappedComponent.setProps({ onConfirm });
    simulateEvent('span[aria-label="action-content"]', 'click');
    expect(onConfirm).to.have.property('callCount', expectedValueAfter);
  });

  it('Should properly render actionContent when passed as element', () => {
    expectedValue = 'custom action';
    wrappedComponent.setProps({ actionContent: <div>custom action</div> });
    simulateEvent('p', 'click');
    actualValue = wrappedComponent.find('span[aria-label="action-content"]').props().children.props.children;
    expect(actualValue).equal(expectedValue);
  });
});
