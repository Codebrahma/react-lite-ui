## Drawer

A basic drawer component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `children` | `Any` | `null` | All children components to be rendered inside the drawer. |
| `position` | `String` | `left` | Set a position for drawer. Possible values are: **_top_**, **_right_**, **_bottom_** or **_left_** |
| `className` | `String` | `''` | Set a class to style the Component |
| `open` | `boolean` | `false` | Toggle drawer show / hide |
| `onClose` | `function` | `` | Callback for close event in drawer. |

### Theme

| Name     | Description|
|:---------|:-----------|
| `drawer-container` | Class used for the drawer container / backdrop element. |
| `drawer-open` | Class used for the drawer container / backdrop element in open state. |
| `drawer-close` | Class used for the drawer container / backdrop element in closed state. |
| `drawer` | Class used for the drawer element. |
| `top` | Class used for the drawer element in top position. |
| `right` | Class used for the drawer element in right position. |
| `bottom` | Class used for the drawer element in bottom position. |
| `left` | Class used for the drawer element in left position. |
| `*position*-open` and `*position*-close` | Class used for the drawer element in provided `position` ( _**top, right, bottom**_ or _**left**_  ) for open and closed states. |

### Example Usage
```
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(prevState => ({ open: !prevState.open }) );
  }
  
  render() {
    return (
      <div>
        <PreviewBlock header="Simple Drawer">
          <Button onClick={this.handleClick} type="primary">click to open drawer</Button>
          <Drawer open={this.state.open}/>
        </PreviewBlock>
      </div>
    )
  }
}
```
