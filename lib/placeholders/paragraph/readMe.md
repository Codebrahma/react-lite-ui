## Paragraph Placeholder

The paragrapg placeholder component.

### Properties

| Name    | Type    | Default                     | Description                                     |
| :------ | :------ | :-------------------------- | :---------------------------------------------- |
| `lines` | `array` | `['25', '75', '50', '100']` | Set the no of lines in card as array of widths. |

### Theme

| Name              | Description                      |
| :---------------- | :------------------------------- |
| `paragraphStyles` | Class used for the root element. |

### Usage

```

const Demo = ({ theme, lines }) => {
  const classes = classnames(theme.styles, theme.paragraphStyles);

  const paragraphPlaceholderProps = {
    className: classes,
  };

  return (
    <div {...paragraphPlaceholderProps}>
      {lines.map(line => (
        <LinePlaceholder lineWidth={line} />
      ))}
    </div>
  );
};
```
