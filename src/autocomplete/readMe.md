## AutoComplete

A basic autocomplete component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `data` | `Array` | `Required` | An array of options for autocompletion |
| `placeholder` | `String` | `undefined` | Set a placeholder for the input component. |
| `className` | `String` | `''` | Set a class to style the Component |
| `onChange` | `function` | `''` | An input change listener which returns the input value on any changes. |

### Theme

| Name     | Description|
|:---------|:-----------|
| `autocomplete` | Class used for the autocomplete element.|

### Example Usage
```
class Demo extends React.Component {
    render() {
        const data = [
            { label: 'lorem' },
            { label: 'ipsum' }
        ];
      return (
        <div>
            <AutoComplete data={data} />
        </div>
      )
    }
  }
```
