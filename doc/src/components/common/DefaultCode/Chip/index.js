export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Chip>C</Chip>;
    }
  }
  `,
  propsData: [
    {
      prop: 'Chip  prop',
      type: 'String',
      defaultValue: 'default prop Chip ',
      description: 'I am Chip ing default description for component',
    },
    {
      prop: 'Chip  some prop',
      type: 'String',
      defaultValue: 'some default prop Chip ',
      description: 'I am some Chip ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'Chip ing description',
    },
    {
      name: 'default some theme',
      description: 'Chip ing some description',
    },
  ],
  basicComponent: `
    <Chip />
  `
};