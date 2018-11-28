export const defaultCode =   `
class Demo extends React.Component {
  render() {
    const options = [
      { label: 'Lorem' }, 
      { label: 'Ipsum'}, 
      { label: 'Dolor' }
    ];
    return (
      <div>
        <PreviewBlock header="Simple Select">
          <Select
            options={options}
          />
        </PreviewBlock>
      </div>
    )
  }
}
`;
