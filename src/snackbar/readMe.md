## Button

The base Snackbar component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `children` | `Any` | `null` | All children components to be rendered inside the Snackbar |
| `timeout` | `Number` | 2000 | Timeout to auto hide the snackbar |
| `autoClose` | `Boolean` | true | Prop to decide whether the snackbar should close automatically after the given timeout or not |
| `onClose` | `function` | null | The callback function to be called when the snackbar closes |
| `position` | `String` | `bottom` | The position at which the snackbar should be show. The possible values are `top`, `bottom` |

### Theme

| Name     | Description|
|:---------|:-----------|
| `snackbar`   | Class used for the snackbar element.|
| `snackbarWrapper` |  Class used for snackbar wrapper element |

### Usage

```
  <div>
    <Snackbar
      active={this.state.showIndefiniteSnackbar}
      onClose={this.handleSnackClose}
      autoClose={false}>
      <span>This is a indefinite snackbar.</span>
    </Snackbar>
  </div>
```