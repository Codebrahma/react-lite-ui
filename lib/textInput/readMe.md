## TextInput

The base input component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `width` | `String` | `null` | Cutsom width to be set to the input component |
| `additionalClass` | `String` | `''` | Set a class to style the Component |

In addition to the above props, this component accepts all the props supported by `<input />` element

### Theme

| Name     | Description|
|:---------|:-----------|
| `inputWrapper`   | Class used for the root wrapper element.|
| `inputElement`   | Class used for the input element.|

### Usage
```
  <div>
    <TextInput />
    <TextInput disabled={true}/>
    <TextInput width='200px' placeholder="type here..."/>
    <TextInput type="password" placeholder="Enter password..."/>
  </div>
```