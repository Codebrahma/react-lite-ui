## Card Placeholder

The card placeholder component.

### Properties

| Name         | Type     | Default  | Description                                 |
| :----------- | :------- | :------- | :------------------------------------------ |
| `imageShape` | `String` | `circle` | Set the shape of the box in card component. |

### Theme

| Name         | Description                      |
| :----------- | :------------------------------- |
| `cardStyles` | Class used for the root element. |

### Usage

```

const Demo = ({ theme, imageShape }) => (
  <div className={classNames(theme.styles, theme.cardStyles)}>
    <div className={theme.imageWrapper}>
      <div className={theme.gutterSpaceHorizontal}>
        <BoxPlaceholder shape={imageShape} />
      </div>

      <LinePlaceholder lineWidth="100" />
    </div>

    <LinePlaceholder lineWidth="75" />
    <LinePlaceholder lineWidth="50" />
  </div>
);
```
