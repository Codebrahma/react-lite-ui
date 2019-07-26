## Imagecard Placeholder

The image card placeholder component.

### Properties

| Name         | Type     | Default                     | Description                                     |
| :----------- | :------- | :-------------------------- | :---------------------------------------------- |
| `imageShape` | `String` | `circle`                    | Set the shape of the box in card component.     |
| `lines`      | `array`  | `['25', '75', '50', '100']` | Set the no of lines in card as array of widths. |

### Theme

| Name              | Description                      |
| :---------------- | :------------------------------- |
| `imageCardStyles` | Class used for the root element. |

### Usage

```

const Demo = ({ theme, lines, imageShape }) => {
  const classes = classnames(theme.imageCardStyles);

  const ImageCardProps = {
    className: classes,
  };

  return (
    <div {...ImageCardProps}>
      <BoxPlaceholder shape={imageShape} />
      {lines.map(line => (
        <LinePlaceHolder lineWidth={line} />
      ))}
    </div>
  );
};
```
