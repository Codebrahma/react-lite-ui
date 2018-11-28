export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Tooltip>C</Tooltip>;
    }
  }
  `,
  propsData: [
    {
      prop: 'Tooltip  prop',
      type: 'String',
      defaultValue: 'default prop Tooltip ',
      description: 'I am Tooltip ing default description for component',
    },
    {
      prop: 'Tooltip  some prop',
      type: 'String',
      defaultValue: 'some default prop Tooltip ',
      description: 'I am some Tooltip ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'Tooltip ing description',
    },
    {
      name: 'default some theme',
      description: 'Tooltip ing some description',
    },
  ],
  basicComponent: `
    <Tooltip tooltipText='Normal Tooltip'>Look down</Tooltip>
  `,
};