## AutoComplete

A basic autocomplete component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `data` | `Array` | &nbsp; | An array of options for autocompletion. ( `Required` ) |
| `placeholder` | `String` | `undefined` | Set a placeholder for the input component. |
| `className` | `String` | `''` | Set a class to style the Component |
| `onChange` | `function` | `` | An input change listener which returns the input value on any changes. |
| `onKeyPress` | `function` | `` | A keypress listener on the input field. |

### Theme

| Name     | Description|
|:---------|:-----------|
| `autocomplete` | Class used for the autocomplete element.|
| `autocomplete-input` | Class used for the text input element.|
| `autocomplete-list` | Class used for the autocomplete list.|
| `autocomplete-list-item` | Class used for the autocomplete list options.|

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
