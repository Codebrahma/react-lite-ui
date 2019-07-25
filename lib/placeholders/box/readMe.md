## Navbar

The box placeholder component.

### Properties

| Name     | Type     | Default   | Description                          |
| :------- | :------- | :-------- | :----------------------------------- |
| `square` | `circle` | &nbsp;    | Shapes of the box default is circle. |
| `shape`  | `String` | `default` | Prop to set the shape of box.        |

### Theme

| Name        | Description                               |
| :---------- | :---------------------------------------- |
| `boxStyles` | Class used for the style the box element. |

### Usage

```

const Demo = ({theme, shape}) => {
    const classes = classnames(theme.styles, theme.boxStyles, theme[shape]);

  const boxPlaceholderProps = {
    className: classes,
  };

  return <div {...boxPlaceholderProps} />;
}
```
