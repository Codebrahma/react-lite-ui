export const defaultCode =   `
class Demo extends React.Component {
  render() {
    return (
      <div>
        <PreviewBlock header="Default Chip and clickable chip">
          <PreviewElements>
            <Chip />
            <Chip
              label='labelled'
              color='primary'
              handleChipClick={()=>alert('Clicked on Chip')}
            />
          </PreviewElements>
        </PreviewBlock>
        <PreviewBlock header="Closable Chips">
          <PreviewElements>
            <Chip
              label='closable chip'
              color='danger'
              handleDelete={() => alert('Clicked Delete Button')}
            />
            <Chip
              label='one more'
              color='info'
              handleDelete={() => alert('Clicked Delete Button')}
            />
          </PreviewElements>
        </PreviewBlock>
        <PreviewBlock header="Avatar Chips, closable and clickable">
          <PreviewElements>
            <Chip
              avatar={<Avatar>K</Avatar>}
              label="alphabet avatar"
              color='warning'
            />
            <Chip
              avatar='https://unsplash.it/50x50'
              label='image avatar'
              color='success'
              handleDelete={() => alert('Clicked Delete Button')}
              handleChipClick={()=>alert('Clicked on Chip')}
            />
          </PreviewElements>
        </PreviewBlock>
        <PreviewBlock header="Outlined transparent Chip Component">
          <PreviewElements>
            <Chip
              label='outlined closable'
              color='danger'
              handleDelete={() => alert('Clicked Delete Button')}
              outlined
            />
            <Chip
              avatar='https://unsplash.it/50x50'
              label='outlined avatar'
              color='info'
              outlined
            />
          </PreviewElements>
        </PreviewBlock>
        <PreviewBlock header="Sizeable Chips">
          <Chip
            size='small'
            label='small chip'
          />
          <Chip
            size='medium'
            label='medium chip'
          />
          <Chip
            size='large'
            label='large chip'
          />
        </PreviewBlock>
      </div>
    )
  }
}
`;