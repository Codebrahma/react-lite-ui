## Checkbox

The base checkbox component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `checked` | `boolean` | `false` | Prop that sends in the state of toggle |
| `onClick` | `Function` | &nbsp; | Callback to be called when checked or unchecked |
| `additionalClass` | `String` | &nbsp; | Prop to send additional classNames for styling |
| `label` | `String` | `null` | Prop to attach text next to the checkbox element. |
| &nbsp; | `any` | &nbsp; | Any additional props passed will be spreaded on input element |


### Theme

| Name     | Description|
|:---------|:-----------|
| `checkbox`   | Class used for the root element.|
| `checked`   | Class used for the element when checked.|
| `label`   | Class used for the label text.|

### Usage
```
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
    };
  }

  handleCheckClick = () => {
    this.setState((prevState) => ({
      checked: !prevState.checked,
    }));
  }

  render() {
    return (
      <div>
        <Checkbox checked />
        <Checkbox
          onClick={this.handleCheckClick}
          checked={this.state.checked}
        />
      </div>
    )
  }
}
```