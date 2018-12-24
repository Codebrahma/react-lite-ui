## Select

A basic select component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `data` | `Array` | `Required` | An array of options for options |
| `className` | `String` | `''` | Set a class to style the Component |
| `onSelect` | `function` | `` | A change listener which returns the selected value on any changes. ( Optional ) |

### Theme

| Name     | Description|
|:---------|:-----------|
| `select` | Class used for wrapper component. |
| `menu` | Class used for dropdown menu. |
| `option` | Class used for dropdown menu items. |
| `option-hover` | Class used for item on which mouse is hovering. |
| `selectInput` | Class used for input box |
| `selected` | Class used for highlighting selected option. |
| `arrow` | Class used for arrow icon. |
| `up , down` | Class used for arrow icon states. |

### Example Usage
```
class Demo extends React.Component {
  render() {
    const options = [
      { label: 'Lorem' }, 
      { label: 'Ipsum'}, 
      { label: 'Dolor' }
    ];
    return (
      <div>
        <PreviewBlock header="Simple Select">
          <Select
            options={options}
          />
        </PreviewBlock>
      </div>
    )
  }
}
```
