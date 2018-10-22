export const defaultCode = `
class Demo extends React.Component {
    render() {
      const data = [
        "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=wood-landscape-sky-371633.jpg&fm=jpg",
        "https://hanslodge.com/images/pTqrL9Rec.jpg"
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