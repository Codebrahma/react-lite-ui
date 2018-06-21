import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';

const Index = () => (
  <div>
    <Card>
      <span>Card Content</span>
      <span>Card Content</span>

      <span>Card Content</span>
      
    </Card>
  </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));
