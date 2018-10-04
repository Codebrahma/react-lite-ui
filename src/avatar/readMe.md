## Avatar

The base avatar component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `children` | `String` | `null` | Children as a string to render an avatar with alphabet |
| `alphabet` | `String` | &nbsp; | Prop to render avatar with alphabet |
| `image` | `String` | `null` | Prop to render avatar with image |
| `alt` | `String` | &nbsp; | Alternate text for image |
| `className` | `String` | &nbsp; | Set a class to style the component |

### Theme

| Name     | Description|
|:---------|:-----------|
| `avatar`   | Class used for the root element.|
| `avatarContent`   | Class used for the child element.|

### Usage
```
  <div>
    <Avatar image="https://placeimg.com/80/80/animals"/>
    <Avatar>C</Avatar>
    <Avatar theme={theme}>B</Avatar>
    <Avatar alphabet='C' />
  </div>
```
