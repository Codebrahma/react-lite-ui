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
      constructor(props) {
        super(props);
        this.style = {
          chipContent: {
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gridGap: 20,
            alignItems: "center"
          }
        };
      }
      render() {
        return (
          <div>
            <PreviewBlock header="Default Chip and clickable chip">
              <div style={this.style.chipContent}>
                <Chip />
                <Chip
                  label='labelled'
                  color='primary'
                  handleChipClick={()=>alert('Clicked on Chip')}
                />
              </div>
            </PreviewBlock>
            <PreviewBlock header="Closable Chips">
              <div style={this.style.chipContent}>
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
              </div>
            </PreviewBlock>
            <PreviewBlock header="Avatar Chips, closable and clickable">
              <div style={this.style.chipContent}>
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
              </div>
            </PreviewBlock>
            <PreviewBlock header="Outlined transparent Chip Component">
              <div style={this.style.chipContent}>
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
              </div>
            </PreviewBlock>
            <PreviewBlock header="Sizeable Chips">
              <div style={this.style.chipContent}>
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
              </div>
            </PreviewBlock>
          </div>
        )
      }
    }
  `,
};