export const defaultCode = `
class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const columns = [
      { title: 'Name', key: 'name' },
      { title: 'Default Value', key: 'defaultValue' },
      { title: 'Description', key: 'description' },
    ];
    const data = [
      {
        serialNo: 1,
        name: 'Name-1',
        defaultValue: 'first value',
        description: 'dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing elit.',
      },
      {
        serialNo: 2,
        name: 'Name-2',
        defaultValue: 'second value',
        description: 'dolor sit amet, consectetur dolor sit amet, consectetur adipiscing elit adipiscing elit.',
      },
      {
        serialNo: 3,
        name: 'Name-3',
        defaultValue: 'third value',
        description: 'consectetur adipiscing elit, dolor sit amet, .',
      },
      {
        serialNo: 4,
        name: 'Name-4',
        defaultValue: 'fourth value',
        description: 'conse dolor sit amet, consectetur adipiscing elit ctetur adipiscing elit, dolor sit amet.',
      },
      {
        serialNo: 5,
        name: 'Name-5',
        defaultValue: 'fifth value',
        description: 'consectetur adipiscing elit, dolor sit amet.',
      },
    ];
    return (
      <PreviewBlock header="Default Table">
        <Table columns={columns} data={data} />
      </PreviewBlock>
    )
  }
}
`;
