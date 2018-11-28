export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Table>C</Table>;
    }
  }
  `,
  propsData: [
    {
      prop: 'Table  prop',
      defaultValue: 'default prop Table ',
      description: 'I am Table ing default description for component',
    },
    {
      prop: 'Table  some prop',
      defaultValue: 'some default prop Table ',
      description: 'I am some Table ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'Table ing description',
    },
    {
      name: 'default some theme',
      description: 'Table ing some description',
    },
  ],
  basicComponent: `
    class Demo extends React.Component {
      constructor(props) {
        super(props);
      }

      render() {
        const columns = [
          { title: 'Name', key: 'name', colWidth: '150px' },
          { title: 'Default Value', key: 'defaultValue' },
          { title: 'Description', key: 'description' },
        ];
        const data = [
          {
            name: 'Name-1',
            defaultValue: 'first value',
            description: 'dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing elit.',
          },
          {
            name: 'Name-2',
            defaultValue: 'second value',
            description: 'amet, consectetur dolor sit amet, consectetur adipiscing elit adipiscing elit.',
          },
          {
            name: 'Name-3',
            defaultValue: 'third value',
            description: 'consectetur adipiscing elit, dolor sit amet, .',
          },
          {
            name: 'Name-4',
            defaultValue: 'fourth value',
            description: 'bense dolor sit amet, consectetur adipiscing elit ctetur adipiscing elit, dolor sit amet.',
          },
          {
            name: 'Name-5',
            defaultValue: 'fifth value',
            description: 'ectetur adipiscing elit, dolor sit amet.',
          },
        ];
        return (
            <Table columns={columns} data={data} sort />
        )
      }
    }
  `,
};