import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import customTheme from './customcard.scss';

import Button from './button';

const Index = () => (
  <div>
    <Card
      header='Card String header'
      wrapContent
      theme={customTheme}>
      <span>Card Content</span>
      <span>Card Content</span>
      <span>Card Content</span>
    </Card>

    <div style={{ margin: '20px' }}>
      <Button size="medium">Hello</Button>
      <Button type="secondary" size="small">Hello</Button>
      <Button type="primary">Hello</Button>
      <Button type="success" size="large">Hello</Button>
    </div>
  </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));
