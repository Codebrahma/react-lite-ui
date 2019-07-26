## Card Placeholder

The card placeholder component.

### Properties

| Name         | Type     | Default  | Description                                 |
| :----------- | :------- | :------- | :------------------------------------------ |
| `imageShape` | `String` | `circle` | Set the shape of the box in card component. |
| `className` | `String` | &nbsp; | Additional class(es) for custom styling. These classes will be added along with library specific styles |
| `wrapContent` | `Boolean` | `false`  | If `true` sets the width of the parent card to width of its content else sets width to maximum available width inside its parent  |
| `elevation` | `String` | `low`  | This set elevation/depth of shadow of the card. The possible values are `low`, `medium`, `high`  |
| `noPadding` | `Boolean` |  `false` | If `true` card container will not give padding by default  |

### Theme

| Name         | Description                      |
| :----------- | :------------------------------- |
| `imageWrapper` | Controles the flex direction of image box and line. |

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
                { loading ? <CardPlaceholder cardTheme={cardPlaceholderTheme} imageShape={imageShape} className= {customClassName}/> : 
                <div>User Content</div>
             </div>
        )
    }
}
```
