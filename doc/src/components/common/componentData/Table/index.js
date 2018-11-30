export const componentData = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Table>C</Table>;
    }
  }
  `,
  propsData: [
    {
      prop: 'columns',
      type: 'Array',
      defaultValue: '',
      description: 'Array of data to be render as table column headers (Required)',
    },
    {
      prop: 'data',
      type: 'Array',
      defaultValue: '',
      description: 'Array of data to be rendered as table body cells (Required).',
    },
    {
      prop: 'sort',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop to be sent, If sorting functionality is required.',
    },
  ],  
  themesData: [
    {
      name: 'tableWrapper',
      description: 'Class used for the root element.',
    },
    {
      name: 'table',
      description: '	Class used for the div wrapping all the rows and columns element.',
    },
    {
      name: 'tableHeader',
      description: 'Class used for the table header element.',
    },
    {
      name: 'tableHeaderCell',
      description: 'Class used for the cells in table header element.',
    },
    {
      name: 'tableHeadCellContent',
      description: 'Class used for the content in table header cells.',
    },
    {
      name: 'tableBodyCellContent',
      description: 'Class used for the content in table body cells.',
    },
    {
      name: 'tableBody',
      description: 'Class used for the table body element.',
    },
    {
      name: 'tableBodyRow',
      description: 'Class used for the rows in table body element.',
    },
    {
      name: 'tableBodyCell',
      description: 'Class used for the cells in table body element.',
    },
    {
      name: 'sortArrow',
      description: 'Class used for the sorting arrows in table header cells.',
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