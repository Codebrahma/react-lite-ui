## RadioButtonGroup

The base RadioButtonGroup component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `options` | `Array` | &nbsp; | Options to render radio buttons for. ( `Required` ) |
| `onClick` | `Function` | &nbsp; | Callback function to be called when the radio button is clicked |
| `inline` | `boolean` | `false` | Prop to define the alignment of radio button group |

### Theme

| Name     | Description|
|:---------|:-----------|
| `radio-group`   | Class used for the root element.|
| `customized-radio`   | Class used for the radio button element.|
| `each-radio`   | Class used for the radio button wrapper element.|
| `each-label`   | Class used for the label element.|

### Usage
```
class Demo extends React.Component {
  
  handleRadioButtonClick = label => {
    alert('Clicked on ' + label);
  };

  render() {
    const options = [
      { label: 'Alpha' }, 
      { label: 'Beta'}, 
      { label: 'Zheta' }
    ];
    return (
      <div>
        <RadioButtonGroup
          inline
          options={options}
          onClick={this.handleRadioButtonClick}
        />
      </div>
    )
  }
}
```