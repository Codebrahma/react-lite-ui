export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Button>C</Button>;
    }
  }
  `,
  propsData: [
    {
      prop: 'Button  prop',
      type: 'String',
      defaultValue: 'default prop Button ',
      description: 'I am Button ing default description for component',
    },
    {
      prop: 'Button  some prop',
      type: 'String',
      defaultValue: 'some default prop Button ',
      description: 'I am some Button ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'Button ing description',
    },
    {
      name: 'default some theme',
      description: 'Button ing some description',
    },
  ],
  basicComponent: `
    <Button>Primary</Button>
  `
};