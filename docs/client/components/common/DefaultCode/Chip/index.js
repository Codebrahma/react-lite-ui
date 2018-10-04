export const defaultCode =   `
class Demo extends React.Component {
  render() {
    return (
      <div>
        <PreviewBlock header="Default Chip Component">
          <Chip />
          <Chip
            label='small clickable'
            color='warning'
            size='small'
            handleChipClick={()=>alert('Clicked on Chip')}
          />
          <Chip
            avatar='https://unsplash.it/50x50'
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
            avatar='https://unsplash.it/50x50'
            label='large avatar chip'
            color='info'
            size='large'
            outlined
          />
          <Chip
            avatar={<Avatar>K</Avatar>}
            label='avatar click and delete'
            color='secondary'
            size='medium'
            handleDelete={() => alert('Clicked Delete Button')}
            handleChipClick={() => alert('clicked on chip')}
            outlined
          />
        </PreviewBlock>
      </div>
    )
  }
}
`;