export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Avatar>C</Avatar>;
    }
  }
  `,
  propsData: [
    {
      prop: 'avatar  prop',
      type: 'String',
      defaultValue: 'default prop avatar ',
      description: 'I am avatar ing default description for component',
    },
    {
      prop: 'avatar  some prop',
      type: 'String',
      defaultValue: 'some default prop avatar ',
      description: 'I am some avatar ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'avatar ing description',
    },
    {
      name: 'default some theme',
      description: 'avatar ing some description',
    },
  ],
  basicComponent: `
    <Avatar>C</Avatar>
  `,
};