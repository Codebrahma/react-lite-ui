export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Navbar>C</Navbar>;
    }
  }
  `,
  propsData: [
    {
      prop: 'Navbar  prop',
      defaultValue: 'default prop Navbar ',
      description: 'I am Navbar ing default description for component',
    },
    {
      prop: 'Navbar  some prop',
      defaultValue: 'some default prop Navbar ',
      description: 'I am some Navbar ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'Navbar ing description',
    },
    {
      name: 'default some theme',
      description: 'Navbar ing some description',
    },
  ],
  basicComponent: `
    <Navbar title="logo" />
  `,
};