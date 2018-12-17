## Tooltip

The base Tooltip component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `className` | `String` | &nbsp; | Set a class to style the component |
| `children` | `String` | `null` | Children to be rendred as base content  |
| `tooltipText` | `String` | &nbsp; | Prop to render in text in tooltip.( `Required` ) |
| `top` | `bool` | `undefined` | Prop defining the top positioned tooltip |

### Theme

| Name     | Description|
|:---------|:-----------|
| `tooltip`   | Class used for the root wrapper element.|
| `baseContent`   | Class used for the base content.|
| `tip`   | Class used for the tooltip wrapper.|
| `tooltipContent`   | Class used for the tooltip content.|
| `top`   | Class used for the top positioned tooltip.|

### Usage
```
  <div>
    <Tooltip tooltipText='Normal Tooltip'>Look down</Tooltip>
    <Tooltip tooltipText='Top Tooltip' top>Look up</Tooltip>
  </div>
```