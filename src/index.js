// import Button from './button';
// import Card from './card';

// export default {
//   Button,
//   Card,
// }
import React from 'react';
import ReactDOM from 'react-dom';

import Checkbox from './checkbox';

const CheckboxDemo = () => (
  <Checkbox
    checked
    onClick={(e) => { console.log(e); }}
  />
);

ReactDOM.render(<CheckboxDemo />, document.getElementById('index'));
