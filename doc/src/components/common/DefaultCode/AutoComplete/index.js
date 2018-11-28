export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <AutoComplete />;
    }
  }
  `,
  propsData: [
    {
      prop: 'AutoComplete  prop',
      type: 'String',
      defaultValue: 'default prop AutoComplete ',
      description: 'I am AutoComplete ing default description for component',
    },
    {
      prop: 'AutoComplete  some prop',
      type: 'String',
      defaultValue: 'some default prop AutoComplete ',
      description: 'I am some AutoComplete ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'AutoComplete ing description',
    },
    {
      name: 'default some theme',
      description: 'AutoComplete ing some description',
    },
  ],
  basicComponent: `
    class Demo extends React.Component {
      render() {
          const data = [
              { label: 'lorem' },
              { label: 'ipsum' }
          ];
        return (
          <AutoComplete data={data} />
        )
      }
    }
  `,
};