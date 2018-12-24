## Chip

The base chip component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `color` | `String` | `secondary` | Represents the style to be applied for the chip. Possible values are `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, and `dark` |
| `size` | `String` | `medium`  | Defines the size of the chip. Possible values are `small`, `medium`, and `large` |
| `className` | `String` | `''` | Set a class to style the Component |
| `avatar` | `String`/`Element` | `null` | Value of the icon |
| `handleChipClick` | `Function` | `null` | Callback to be called when the `chip` is clicked |
| `handleDelete` | `Function` | `null` | Callback to be called when the `deleteIcon` is clicked |

### Theme

| Name     | Description|
|:---------|:-----------|
| `chip`   | Class used for the root element.|
| `primary` | Class used for styling `primary` colored chips |
| `secondary` | Class used for styling `secondary` colored chips |
| `success` | Class used for styling `success` colored chips |
| `danger` | Class used for styling `danger` colored chips |
| `warning` | Class used for styling `warning` colored chips |
| `info` | Class used for styling `info` colored chips |
| `light` | Class used for styling `light` colored chips |
| `dark` | Class used for styling `dark` colored chips |
| `small` | Class used for styling `small` sized chips |
| `medium` | Class used for styling `medium` sized chips |
| `large` | Class used for styling `large` sized chips |
| `label`   | Class used for styling `label` element.|
| `avatar`   | Class used for styling `avatar` element.|
| `deleteIcon`   | Class used for styling `deleteIcon` element.|

### Usage
```
  <div>
    <Chip
      label='labelled Chip'
      color='info'
      size='small'
      handleChipClick={// Functionn to handle click event on chip }
      handleDelete={// Function to handle Deleting chip}
    />
  </div>
```