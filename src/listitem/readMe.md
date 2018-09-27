## ListItem

A basic list item component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `children` | `Any` | `null` | All children components to be rendered inside the list. |
| `className` | `String` | `''` | Set a class to style the Component |
| `onClick` | `function` | `''` | Set a click handler on the listitem |

### Theme

| Name     | Description|
|:---------|:-----------|
| `item`   | Class used for the list item element.|

### Example Usage
```
class Demo extends React.Component {
  render() {
    return (
      <div>
        <PreviewBlock header="Simple List">
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
          </List>
        </PreviewBlock>
      </div>
    )
  }
}
```
