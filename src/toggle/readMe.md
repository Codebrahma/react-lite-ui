## Toggle

The base toggle component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `toggled` | `boolean` | `false` | Prop that sends in the state of toggle |
| `onClick` | `Function` | &nbsp; | Callback to be called when toggled |
| `additionalClass` | `String` | &nbsp; | Prop to send additional classNames for styling |
| `label` | `String` | `toggle` | Prop to send when a callback value is required onClick |
| &nbsp; | `any` | &nbsp; | Any additional props passed will be spreaded on input element |


### Theme

| Name     | Description|
|:---------|:-----------|
| `toggle`   | Class used for the root element.|
| `toggled`   | Class used for the element when toggled.|

### Usage
```
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: true,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      toggled: !prevState.toggled,
    }));
  }

  render() {
    return (
      <div>
          <Toggle />
          <Toggle 
            toggled={this.state.toggled}
            onClick={this.handleToggle}
          />
      </div>
    )
  }
}
```
