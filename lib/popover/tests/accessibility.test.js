import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Popover from '..';
import Button from '../../button';

/* eslint-disable no-undef */
describe('Popover accessibility tests', () => {
  let wrappedComponent;
  let expectedValueBefore;
  let expectedValueAfter;
  let actualValue;

  beforeEach(() => {
    wrappedComponent = mount( // eslint-disable-line
      <Popover content="this is popover content">
        <Button>Click Me</Button>
      </Popover>,
    ) // eslint-disable-line
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  const simulateEvent = (component, event) => wrappedComponent.find(component).simulate(event);

  it('Should update position according to position prop.', () => {
    expectedValueBefore = 'bottomLeft';
    expectedValueAfter = 'topRight';
    actualValue = () => wrappedComponent.find(Popover).prop('position');
    expect(actualValue()).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ position: 'topRight' });
    expect(actualValue()).to.equal(expectedValueAfter);
  });

  it('Should render popover when clicked', () => {
    expectedValueBefore = false;
    expectedValueAfter = 'popover-content';
    actualValue = () => wrappedComponent
      .find(Popover)
      .children()
      .childAt(0)
      .props()
      .children;
    expect(actualValue()[1]).to.equal(expectedValueBefore);
    simulateEvent(Button, 'click');
    expect(actualValue()[1].props['aria-label']).to.equal(expectedValueAfter);
  });

  it('Should hide popover on blur', () => {
    expectedValueBefore = 'popover-content';
    expectedValueAfter = false;
    actualValue = () => wrappedComponent
      .find(Popover)
      .children()
      .childAt(0)
      .props()
      .children;
    simulateEvent(Button, 'click');
    expect(actualValue()[1].props['aria-label']).to.equal(expectedValueBefore);
    simulateEvent('#popover-test', 'blur');
    expect(actualValue()[1]).to.equal(expectedValueAfter);
  });

  it('Should not render actionContent when noAction prop is passed', () => {
    expectedValueBefore = 'action-content';
    expectedValueAfter = false;
    actualValue = () => wrappedComponent
      .find(Popover)
      .children()
      .childAt(0)
      .props()
      .children[1]
      .props
      .children;
    simulateEvent(Button, 'click');
    expect(actualValue()[2].props['aria-label']).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ noAction: true });
    expect(actualValue()[2]).to.equal(expectedValueAfter);
  });

  it('Should not render title when title prop is not passed', () => {
    expectedValueBefore = null;
    expectedValueAfter = 'popover-title';
    actualValue = () => wrappedComponent
      .find(Popover)
      .children()
      .childAt(0)
      .props()
      .children[1]
      .props
      .children;
    simulateEvent(Button, 'click');
    expect(actualValue()[0]).to.equal(expectedValueBefore);
    wrappedComponent.setProps({ title: 'popover-title' });
    expect(actualValue()[0].props['aria-label']).to.equal(expectedValueAfter);
  });
});
