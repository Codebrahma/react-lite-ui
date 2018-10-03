## CheckboxGroup

The base CheckboxGroup component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `options` | `Array` | &nbsp; | Options to render checkboxes for. ( `Required` ) |
| `onClick` | `Function` | &nbsp; | Callback function to be called when the checkbox is clicked, receives the label as argument |
| `inline` | `boolean` | `false` | Prop to define the alignment of checkbox group |

### Theme

| Name     | Description|
|:---------|:-----------|
| `checkbox-group`   | Class used for the root element.|
| `each-check`   | Class used for the checkbox element.|
| `each-label`   | Class used for the label element.|

### Usage
```
class App extends React.Component {

  handleCheckListClick = label => {
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
        <CheckboxGroup
          options={options}
          onClick={this.handleCheckListClick}
        />
        <CheckboxGroup
          inline
          options={options}
          onClick={this.handleCheckListClick}
        />
      </div>
    )
  }
}
```
