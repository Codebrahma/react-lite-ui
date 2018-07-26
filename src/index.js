// import Button from './button';
// import Card from './card';
// import Checkbox from './checkbox';
// import CheckboxGroup from './checkboxGroup';
// import Toggle from './toggle';

// export default {
//   Button,
//   Card,
//   Checkbox,
//   CheckboxGroup,
//   Toggle,
// };

import React from 'react';
import ReactDOM from 'react-dom';

import RadioButtonGroup from './radioButtonGroup';

const options = [{ label: 'Alpha' }, { label: 'Beta' }, { label: 'Zheta' }]
const RadioDisplay = () => (
  <div>
    <RadioButtonGroup
      options={options}
    />
  </div>
);

ReactDOM.render(<RadioDisplay />, document.getElementById('index'));