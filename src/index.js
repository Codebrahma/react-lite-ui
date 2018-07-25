// import Button from './button';
// import Card from './card';

// export default {
//   Button,
//   Card,
// }
import React from 'react';
import ReactDOM from 'react-dom';

import Checkbox from './checkbox';
import CheckboxGroup from './checkboxGroup';

// import themes from './theme.scss';

const options = [
  { label: 'Male' }, { label: 'female' }, { label: 'alpha' },
];

const CheckboxDemo = () => (
  <React.Fragment>
    <CheckboxGroup
      options={options}
      inline
    />
  </React.Fragment>
);

ReactDOM.render(<CheckboxDemo />, document.getElementById('index'));
