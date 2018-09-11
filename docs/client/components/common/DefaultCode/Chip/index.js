export const defaultCode =   `
class Demo extends React.Component {
  render() {
    return (
      <PreviewBlock header="Chip Component">
        <Chip avatar={<Avatar>K</Avatar>} outlined handleDelete={() => alert('Clicked Delete Button')}/>
      </PreviewBlock>
    )
  }
}
`;