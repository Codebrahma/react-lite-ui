export const componentData = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Slider>C</Slider>;
    }
  }
  `,
  propsData: [
    {
      prop: 'Slider  prop',
      defaultValue: 'default prop Slider ',
      description: 'I am Slider ing default description for component',
    },
    {
      prop: 'Slider  some prop',
      defaultValue: 'some default prop Slider ',
      description: 'I am some Slider ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'Slider ing description',
    },
    {
      name: 'default some theme',
      description: 'Slider ing some description',
    },
  ],
  basicComponent: `
    <Slider />
  `,
};