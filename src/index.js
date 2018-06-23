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
      <Button size="medium" icon="favorite">Hello</Button>
      <Button type="danger" size="medium" icon="bookmark" iconAlignment="right">Hello</Button>
      <Button type="secondary" size="small">Hello</Button>
      <Button type="primary">Hello</Button>
      <Button type="success" size="large">Hello</Button>
      <Button type="warning" size="small">Hello</Button>
      <Button type="info" size="medium">Hello</Button>
      <Button type="dark" size="large">Hello</Button>
    </div>
  </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));
