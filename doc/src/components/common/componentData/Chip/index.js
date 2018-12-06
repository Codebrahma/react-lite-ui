export const componentData = {
  htmlStructure: `
    <div class="chip small primary">
      <!-- Avatar element, if passed in props -->
      <span class="label">label</span>
      <button class="deleteIcon smallDelete primary">
        <i class="icon-cross" />
      </button>
    </div>
  `,
  propsData: [
    {
      prop: 'color',
      type: 'String',
      defaultValue: 'secondary',
      description: 'Represents the style to be applied for the chip. Possible values are primary, secondary, success, danger, warning, info, light, and dark',
    },
    {
      prop: 'size',
      type: 'String',
      defaultValue: 'medium',
      description: 'Defines the size of the chip. Possible values are small, medium, and large',
    },
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Set a class to style the Component',
    },
    {
      prop: 'avatar',
      type: 'String / Element',
      defaultValue: 'null',
      description: 'Value of the icon',
    },
    {
      prop: 'handleChipClick',
      type: 'Function',
      defaultValue: 'null',
      description: 'Callback to be called when the chip is clicked',
    },
    {
      prop: 'handleDelete',
      type: 'Function',
      defaultValue: 'null',
      description: 'Callback to be called when the deleteIcon is clicked',
    },
  ],  
  themesData: [
    {
      name: 'chip',
      description: 'Class used for the root element.',
    },
    {
      name: '${color}',
      description: 'Class used for styling (primary, secondary, success, danger, warning, info, light, dark) colored chips',
    },
    {
      name: '${size}',
      description: 'Class used for styling (small, medium, large) sized chips',
    },
    {
      name: 'label',
      description: 'Class used for styling label element',
    },
    {
      name: 'avatar',
      description: 'Class used for styling avatar element',
    },
    {
      name: 'deleteIcon',
      description: 'Class used for styling deleteIcon element.',
    },
  ],
  basicComponent: `
    <Chip />
  `,
  componentUsage: `
    class Demo extends React.Component {
      render() {
        return (
          <div>
            <PreviewElements>
              <PreviewBlock header="Default Chip">
                <Chip />
              </PreviewBlock>
              <PreviewBlock header="Labelled Chip">
                <Chip
                  label='labelled'
                  color='primary'
                  handleChipClick={()=>alert('Clicked on Chip')}
                />
              </PreviewBlock>
              <PreviewBlock header="Closable Chip">
                <Chip
                  label='closable chip'
                  color='danger'
                  handleDelete={() => alert('Clicked Delete Button')}
                />
                </PreviewBlock>
              </PreviewElements>
              <PreviewElements>
                <PreviewBlock header="Alphabet Avatar">
                  <Chip
                    avatar={<Avatar>K</Avatar>}
                    label="alphabet avatar"
                    color='warning'
                  />
                </PreviewBlock>
                <PreviewBlock header="Image Avatar">
                  <Chip
                    avatar='https://placeimg.com/80/80/people'
                    label='image avatar'
                    color='success'
                    handleDelete={() => alert('Clicked Delete Button')}
                  />
                </PreviewBlock>
                <PreviewBlock header="Avatar and Clickable">
                  <Chip
                    avatar='https://placeimg.com/80/80/fruits'
                    label='one more'
                    color='info'
                    handleChipClick={()=>alert('Clicked on Chip')}
                    handleDelete={() => alert('Clicked Delete Button')}
                  />
                </PreviewBlock>
            </PreviewElements>
            <PreviewElements>
              <PreviewBlock header="Outlined Chip">
                <Chip
                  label='outlined chip'
                  color='danger'
                  outlined
                />
              </PreviewBlock>
              <PreviewBlock header="Outlined Avatar">
                <Chip
                  avatar='https://placeimg.com/80/80/animals'
                  label='outlined avatar'
                  color='info'
                  outlined
                />
              </PreviewBlock>
              <PreviewBlock header="Outlined closable">
                <Chip
                  label='outlined closable'
                  color='success'
                  outlined
                  handleDelete={() => alert('Clicked Delete Button')}
                />
              </PreviewBlock>
            </PreviewElements>
            <PreviewElements>
            <PreviewBlock header="Small Chip">
                <Chip
                  size='small'
                  label='small chip'
                />
              </PreviewBlock>
              <PreviewBlock header="medium chip">
                <Chip
                  size='medium'
                  label='medium chip'
                />
              </PreviewBlock>
              <PreviewBlock header="large chip">
                <Chip
                  size='large'
                  label='large chip'
                />
              </PreviewBlock>
            </PreviewElements>
          </div>
        )
      }
    }
  `,
};