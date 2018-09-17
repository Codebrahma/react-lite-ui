## Menu

The base menu component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `children` | `Any` | &nbsp; | All children components to be rendered inside a cardview |
| `className` | `String` | &nbsp; | Additional class(es) for custom styling. These classes will be added along with library specific styles |

### Theme

| Name     | Description|
|:---------|:-----------|
| `menu`   | Class used for the menu component.|
| `wrapper` |  Class used for the parent wrapper of menu component. Applies flex property to the wrapper |
| `arrow` | Class used for arrow on dropdown. |
| `submenu` | Class used for nested menus. | 
| `menuitem` | Class used for nested menu items. | 

### Usage
```
class Demo extends React.Component {
  render() {
    return (
      <div>
        <PreviewBlock header="Simple Menu">
        <Menu>
          <span>Option 1</span>
          <Menu submenu title="Submenu 1">
              <span>sub1-Option 1</span>
              <span>sub1-Option 2</span>
            </Menu>
          <Menu submenu title="Submenu 2">
            <span>sub2-Option1</span>
            <span>sub2-Option2</span>
            <Menu submenu title="Nested Submenu 1">
              <span>Option 1</span>
              <span>Option 2</span>
            </Menu>
            <Menu submenu title="Nested Submenu 2">
              <span>Option 1</span>
              <span>Option 2</span>
            </Menu>
          </Menu>
          <span>Option 2</span>
          <span>Option 3</span>
        </Menu>
        </PreviewBlock>
      </div>
    )
  }
}
```
