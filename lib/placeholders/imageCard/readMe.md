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

class Demo extends React.Component {
    state = {
       loading: false,
    }
    render() {
       const {loading} = this.state;
       return (
            <div>
                { loading ? <ImageCardPlaceholder 
                                    theme={imageCardPlaceholderTheme} 
                                    imageShape={imageShape} 
                                    lines={linesArray}  
                                    /> : 
                <div>User Content</div>
             </div>
        )
    }
}
```
