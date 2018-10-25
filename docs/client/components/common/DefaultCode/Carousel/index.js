export const defaultCode = `
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
`