import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button';
import Card from './card';
import Checkbox from './checkbox';
import CheckboxGroup from './checkboxGroup';
import Toggle from './toggle';
import RadioButtonGroup from './radioButtonGroup';
import TextInput from './textInput';

export default {
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  RadioButtonGroup,
  Toggle,
  TextInput
};
import Snackbar from './snackbar';

import React from 'react';
import ReactDOM from 'react-dom';

// export default {
//   Button,
//   Card,
//   Checkbox,
//   CheckboxGroup,
//   RadioButtonGroup,
//   Toggle,
// };

import theme from './theme.scss';

class SnackDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSnackbar: false,
    }
  }
  handleButtonClick = () => {
    this.setState({
      showSnackbar: !this.state.showSnackbar
    });
  }
  
  handleSnackClose = () => {
    this.setState({
      showSnackbar: false,
    });
  }

// ReactDOM.render(<RadioDisplay />, document.getElementById('index'));
