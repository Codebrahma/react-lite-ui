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
      prop: 'data',
      type: 'Array',
      defaultValue: '',
      description: '	An array of image urls or custom children. ( Required )',
    },
    {
      prop: 'interval',
      type: 'Number',
      defaultValue: '4000',
      description: 'Set an interval ( in ms ) for switching between carousel items.',
    },
    {
      prop: 'controls',
      type: 'Boolean',
      defaultValue: 'true',
      description: 'Set boolean for showing / hiding left and right controls.',
    }
  ],  
  themesData: [
    {
      name: 'carousel-container',
      description: 'Class used for the main wrapper component of carousel.',
    },
    {
      name: 'carousel-item',
      description: '	Class used for a carousel item / slide.',
    },
    {
      name: 'dot',
      description: 'Class used for the dots for tracking the current page / slide / item.',
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