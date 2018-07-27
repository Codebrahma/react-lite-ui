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

export default {
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  RadioButtonGroup,
  Toggle,
  Snackbar,
};

import theme from './theme.scss';

class SnackDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSnackbar: false,
      showTopSnackbar: false,
      showIndefiniteSnackbar: false,
    }
  }

  openBottomSnackbar = () => {
    this.setState({
      showSnackbar: !this.state.showSnackbar
    });
  }

  openTopSnackbar = () => {
    this.setState({
      showTopSnackbar: !this.state.showTopSnackbar
    });
  }

  openIndefiniteSnackbar = () => {
    this.setState({
      showIndefiniteSnackbar: !this.state.showIndefiniteSnackbar
    });
  }
  
  
  handleSnackClose = () => {
    this.setState({
      showSnackbar: false,
      showTopSnackbar: false,
    });
  }

// ReactDOM.render(<RadioDisplay />, document.getElementById('index'));
