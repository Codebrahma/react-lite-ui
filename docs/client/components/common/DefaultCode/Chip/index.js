export const defaultCode =   `
class Demo extends React.Component {
  render() {
    return (
      <div>
        <PreviewBlock header="Default Chip Component">
          <Chip />
          <Chip
            label='small warning'
            color='warning'
            size='small'
          />
          <Chip
            label='primary chip'
            color='primary'
          />
          <Chip
            label='large deletable'
            color='info'
            size='large'
            handleDelete={() => alert('Clicked Delete Button')}
          />
        </PreviewBlock>
        <PreviewBlock header="Outlined Chip Component">
          <Chip outlined />
          <Chip
            label='small success'
            color='success'
            size='small'
            outlined
          />
          <Chip
            label='danger deletable'
            color='danger'
            handleDelete={() => alert('Clicked Delete Button')}
            outlined
          />
          <Chip
            label='large info chip'
            color='info'
            size='large'
            outlined
          />
        </PreviewBlock>
      </div>
    )
  }
}
`;