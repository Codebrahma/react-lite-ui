## MultiSelect

The base multiselect component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `className` | `String` | `''` | Additional class(es) for custom styling. These classes will be added along with library specific styles |
| `options` | `Array` | &nbsp; | (`Required`) Array of objects to display options. |
| `onSelect` | `function` | &nbsp; | Callback when an option is selected. |

### Theme

| Name     | Description|
|:---------|:-----------|
| `select`   | Class used for the wrapper component. |
| `menu` |  Class used for the dropdown menu. |
| `option` | Class used for dropdown items. |
| `selectedInput` | Class used for wrapper container of selected items. | 
| `selectInputWrapper` | Class used for the wrapper container multiselect component ( Note: Multiselect dropdown menu is not wrapped by this wrapper element. ). |
| `selected` | Class for selected chip items. |
| `selected-option` | Class for selected options in the dropdown menu. |

### Usage
```
class Demo extends React.Component {
  render() {
    const options = [
        { label: 'Lorem' }, 
        { label: 'Ipsum'}, 
        { label: 'Dolor' },
        { label: 'Sit' },
        { label: 'Amet' },
        { label: 'Consectetur' },
        { label: 'Adipiscing' }
    ];
    return (
      <div>
        <PreviewBlock header="Simple MultiSelect">
          <MultiSelect
            options={options}
          />
        </PreviewBlock>
      </div>
    )
  }
}
```
