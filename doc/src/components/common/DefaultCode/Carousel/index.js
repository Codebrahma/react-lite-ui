export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Carousel>C</Carousel>;
    }
  }
  `,
  propsData: [
    {
      prop: 'Carousel  prop',
      type: 'String',
      defaultValue: 'default prop Carousel ',
      description: 'I am Carousel ing default description for component',
    },
    {
      prop: 'Carousel  some prop',
      type: 'String',
      defaultValue: 'some default prop Carousel ',
      description: 'I am some Carousel ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'Carousel ing description',
    },
    {
      name: 'default some theme',
      description: 'Carousel ing some description',
    },
  ],
  basicComponent: `
    class Demo extends React.Component {
      render() {
        const data = [
          "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=wood-landscape-sky-371633.jpg&fm=jpg",
          "https://hanslodge.com/images/pTqrL9Rec.jpg",
          "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?cs=srgb&dl=sea-landscape-nature-248797.jpg&fm=jpg"
        ];
        return <Carousel data={data}/>;
      }
    }
  `,
};