## Button

The base button component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `children` | `Any` | `null` | All child component to be rendered inside a button |
| `type` | `String` | `default` | Represents the style to be applied for the button. Possible values are 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', and 'dark' |
| `size` | `String` | `medium`  | Defines the size of the button. Possible values are 'small', 'medium', and 'large' |
| `className` | `String` | `''` | Set a class to style the Component |
| `href` | `String` | `null` | Creates a link for the button. |
| `icon` | `String`/`Element` | `null` | Value of the icon |
| `iconAlignment` | `String` | `left` | Set an alignment of the icon. Possible values are 'left', 'right' |
| `onClick` | `Function` |  | Callback to be called when the button is clicked |

### Theme

| Name     | Description|
|:---------|:-----------|
| `button`   | Class used for the root element.|
| `primary` | Class used for styling `primary` type buttons |
| `secondary` | Class used for styling `secondary` type buttons |
| `success` | Class used for styling `success` type buttons |
| `danger` | Class used for styling `danger` type buttons |
| `warning` | Class used for styling `warning` type buttons |
| `info` | Class used for styling `info` type buttons |
| `light` | Class used for styling `light` type buttons |
| `dark` | Class used for styling `dark` type buttons |
| `small` | Class used for styling `small` sized buttons |
| `medium` | Class used for styling `medium` sized buttons |
| `large` | Class used for styling `large` sized buttons |

### Usage
```
  <div>
    <div>
      <h4>Buttons with diffent styles</h4>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="success">Success</Button>
      <Button type="danger">Danger</Button>
      <Button type="warning">Warning</Button>
      <Button type="info">Info</Button>
      <Button type="light">Light</Button>
      <Button type="dark">Dark</Button>
    </div>

    <div>
      <h4>Buttons with diffent sizes</h4>
      <Button type="primary" size="small">Small</Button>
      <Button type="primary" size="medium">Medium</Button>
      <Button type="primary" size="large">Large</Button>
    </div>

    <div>
      <h4>Buttons with Icon</h4>
      <Button type="success" icon="done">Left Icon</Button>
      <Button type="success" icon="done" iconAlignment="right">Right Icon</Button>
    </div>
  </div>
```