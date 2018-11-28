export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Badge>C</Badge>;
    }
  }
  `,
  propsData: [
    {
      prop: 'Badge  prop',
      type: 'String',
      defaultValue: 'default prop Badge ',
      description: 'I am Badge ing default description for component',
    },
    {
      prop: 'Badge  some prop',
      type: 'String',
      defaultValue: 'some default prop Badge ',
      description: 'I am some Badge ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'Badge ing description',
    },
    {
      name: 'default some theme',
      description: 'Badge ing some description',
    },
  ],
  basicComponent: `
    <Badge>
      <Button type="primary">Default</Button>
    </Badge>
  `,
};