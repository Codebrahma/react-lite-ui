## List

A basic list component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `children` | `Any` | `null` | All children components to be rendered inside the list. |
| `className` | `String` | `''` | Set a class to style the Component |
| `items` | `Array` | `[]` | Optional Array of strings or elements to render inside the list.  |
| `raised` | `String` | `''` | Add raised effect on the list element. Possible values are - **'*low* '**, **'*medium* '** and **'*high* '** |

### Theme

| Name     | Description|
|:---------|:-----------|
| `list`   | Class used for the list element.|
| `low`   | Class used for the raised effect on list element.|
| `medium`   | Class used for the raised effect on list element.|
| `high`   | Class used for the raised effect on list element.|

### Example Usage
```
<List 
  items=[
  'ListItem 1', 
  'ListItem2'
  ]

  raised="low"
  >
```
