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

class Demo extends React.Component {
    state = {
       loading: false,
    }
    render() {
       const {loading} = this.state;
       return (
            <div>
                { loading ? <CardPlaceholder theme={cardPlaceholderTheme} imageShape={imageShape} /> : 
                <div>User Content</div>
             </div>
        )
    }
}
```
