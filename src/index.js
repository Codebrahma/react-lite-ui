// import Button from './button';
// import Card from './card';
// import Checkbox from './checkbox';
// import CheckboxGroup from './checkboxGroup';

// export default {
//   Button,
//   Card,
//   Checkbox,
//   CheckboxGroup,
// };

import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from './toggle';

class ToggleDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false,
    };
  }
  
  handleToggle = () => {
    this.setState({
      toggled: !this.state.toggled,
    });
  }

  render() {
    return (
      <Toggle
        toggled={this.state.toggled}
        onClick={this.handleToggle}
      />
    );
  }
}

ReactDOM.render(<ToggleDisplay />, document.getElementById('index'));
