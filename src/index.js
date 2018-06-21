import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import Button from './button';

const Index = () => (
  <div>
    <Card>
      <span>Card Content</span>
      <span>Card Content</span>

      <span>Card Content</span>
    </Card>
    <Button href='http://github.com/javivelasco' target='_blank' raised primary>
      Github
    </Button>
  </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));
