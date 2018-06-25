import React from 'react';
import ReactDOM from 'react-dom';

import CardExample from './examples/card';
import ButtonExample from './examples/button';

const Index = () => (
  <div>
    <CardExample />
    <ButtonExample />
  </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));
