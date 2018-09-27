export const defaultCode =   `
class Demo extends React.Component {
  render() {
    const options = [
        { label: 'Lorem' }, 
        { label: 'Ipsum'}, 
        { label: 'Dolor' },
        { label: 'Sit' },
        { label: 'Amet' },
        { label: 'Consectetur' },
        { label: 'Adipiscing' }
    ];
    return (
      <div>
        <PreviewBlock header="Simple MultiSelect">
          <MultiSelect
            options={options}
          />
        </PreviewBlock>
      </div>
    )
  }
}
`;
