## Navbar

The line placeholder component.

### Properties

| Name        | Type     | Default | Description                                       |
| :---------- | :------- | :------ | :------------------------------------------------ |
| `lineWidth` | `String` | `100`   | Set the line width of the from [25, 50, 75, 100]. |

### Theme

| Name         | Description                      |
| :----------- | :------------------------------- |
| `lineStyles` | Class used for the root element. |

### Usage

```

const Demo = ({ theme, lineWidth }) => {
  const classes = classnames(
    theme.styles,
    theme.lineStyles,
    theme[`lineWidth${lineWidth}`]
  );

  const linePlaceholderProps = {
    className: classes,
  };

  return <div {...linePlaceholderProps} />;
};
```
