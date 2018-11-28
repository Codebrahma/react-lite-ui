export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Preloader>C</Preloader>;
    }
  }
  `,
  propsData: [
    {
      prop: 'Preloader  prop',
      defaultValue: 'default prop Preloader ',
      description: 'I am Preloader ing default description for component',
    },
    {
      prop: 'Preloader  some prop',
      defaultValue: 'some default prop Preloader ',
      description: 'I am some Preloader ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'Preloader ing description',
    },
    {
      name: 'default some theme',
      description: 'Preloader ing some description',
    },
  ],
  basicComponent: `
    <Preloader />
  `,
};