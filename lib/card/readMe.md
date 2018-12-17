## Card

A basic card component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `children` | `Any` | &nbsp; | All children components to be rendered inside a cardview. ( `Required` ) |
| `className` | `String` | &nbsp; | Additional class(es) for custom styling. These classes will be added along with library specific styles |
| `wrapContent` | `Boolean` | `false`  | If `true` sets the width of the parent card to width of its content else sets width to maximum available width inside its parent  |
| `elevation` | `String` | `low`  | This set elevation/depth of shadow of the card. The possible values are `low`, `medium`, `high`  |
| `noPadding` | `Boolean` |  `false` | If `true` card container will not give padding by default  |
| `header` | `String`/`Component` | &nbsp; | If a string is supplied, it will set as title of card with library specific styling. If a React component is supplied that component will be renderd as a header  |

### Theme

| Name     | Description|
|:---------|:-----------|
| `card`   | Class used for the root element.|
| `cardHeader` |  Class used for header component if card renders header by itself |

### Usage
```
  <Card
    header="Hello world!"
    wrapContent
  >
    <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
  </Card>
```
