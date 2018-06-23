import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import customTheme from './customcard.scss';

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
  </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));
