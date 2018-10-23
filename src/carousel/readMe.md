## Carousel

A basic Carousel component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `data` | `Array` | &nbsp; | An array of image urls or custom children. ( `Required` ) |
| `interval` | `Number` | `4000` | Set an interval ( in ms ) for switching between carousel items. |
| `controls` | `Boolean` | `true` | Set boolean for showing / hiding left and right controls. |

### Theme

| Name     | Description|
|:---------|:-----------|
| `carousel-container` | Class used for the main wrapper component of carousel.|
| `carousel-item` | Class used for a carousel item / slide.|
| `dot` | Class used for the dots for tracking the current page / slide / item.|

### Example Usage
```
class Demo extends React.Component {
    render() {
      const data = [
        "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=wood-landscape-sky-371633.jpg&fm=jpg",
        "https://hanslodge.com/images/pTqrL9Rec.jpg",
        "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?cs=srgb&dl=sea-landscape-nature-248797.jpg&fm=jpg"
      ];
      return (
        <div>
          <PreviewBlock header="Demo Carousel">
            <Carousel data={data}/>
          </PreviewBlock>
        </div>
      )
    }
  }
```
