import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import customTheme from './customcard.scss';

import Button from './button'; // eslint-disable-line

const Index = () => (
  <div>
    <Card
      header="Card String header"
      wrapContent
      theme={customTheme}
    >
      <span>Card Content</span>
      <span>Card Content</span>
      <span>Card Content</span>
    </Card>

    <div style={{ margin: '20px' }}>
      <div>
        <h4>Buttons with diffent styles</h4>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="success">Success</Button>
        <Button type="danger">Danger</Button>
        <Button type="warning">Warning</Button>
        <Button type="info">Info</Button>
        <Button type="light">Light</Button>
        <Button type="dark">Dark</Button>
      </div>

      <div>
        <h4>Buttons with diffent sizes</h4>
        <Button type="primary" size="small">Small</Button>
        <Button type="primary" size="medium">Medium</Button>
        <Button type="primary" size="large">Large</Button>
      </div>

      <div>
        <h4>Buttons with Icon</h4>
        <Button type="success" icon="done">Left Icon</Button>
        <Button type="success" icon="done" iconAlignment="right">Right Icon</Button>
      </div>
    </div>
  </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));
