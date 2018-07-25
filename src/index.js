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
import Toggle from './toggle';
import themes from './theme.scss';

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
        theme={themes}
      />
    );
  }
}

ReactDOM.render(<ToggleDisplay />, document.getElementById('index'));
