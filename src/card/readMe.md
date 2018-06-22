## Card

The base card component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `children` | `Any` |  | All child component to be rendered inside a cardview |
| `className` | `String` |  | Additional class(es) for custom styling. These classes will be added along with library specific styles |
| `wrapContent` | `Boolean` | `false`  | If `true` sets the width of the parent card to width of its content else sets width to maximum available width inside its parent  |
| `elevation` | `String` | `low`  | This set elevation/depth of shadow of the card. The possible values are `low`, `medium`,`high`  |
| `noPadding` | `Boolean` |  `false` | If `true` card container will not give padding by default  |
| `header` | `String`/`Component` |  | If a string is supplied, it will set as title of card with library specific styling. If a React component is supplied that component will be renderd as a header  |

### Theme

| Name     | Description|
|:---------|:-----------|
| `card`   | Class used for the root element.|
| `cardHeader` |  Class used for header component if card renders header by itself |

### Usage
```
  <Card
      header='Card String header'
      wrapContent
      noPadding
      theme={customTheme}>
      <span>Card Content</span>
      <span>Card Content</span>
      <span>Card Content</span>
  </Card>
```