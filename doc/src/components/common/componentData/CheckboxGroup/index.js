export const componentData = {
  htmlStructure: `
    <div class="checkbox-group">
      <div class="each-check">
        <span>
          <span class="checkbox checked">
            <input type="checkbox" />
            <span class="check-item" />
          </span>
          <span class="label">checkbox label</span>
        </span>
        <span>
          <span class="checkbox">
            <input type="checkbox" />
            <span class="check-item" />
          </span>
          <span class="label">checkbox label</span>
        </span>
      </div>
      <div class="clearfix" />
    </div>
  `,
  propsData: [
    {
      prop: 'options',
      type: 'Array',
      defaultValue: '',
      description: 'Options to render checkboxes for. ( Required )',
    },
    {
      prop: 'onClick',
      type: 'Function',
      defaultValue: '',
      description: 'Callback function to be called when the checkbox is clicked, receives the label as argument',
    },
    {
      prop: 'inline',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop to define the alignment of checkbox group',
    },
  ],  
  themesData: [
    {
      name: 'checkbox-group',
      description: 'Class used for the root element.',
    },
    {
      name: 'each-check',
      description: 'Class used for the checkbox element.',
    },
  ],
  basicComponent: `
    class Demo extends React.Component {
      constructor(props) {
        super(props);

        this.handleCheckListClick = this.handleCheckListClick.bind(this);
      }

      handleCheckListClick (label) {
        alert('Clicked on ' + label);
      };

      render() {
        const options = [
          { label: 'Alpha' }, 
          { label: 'Beta'}, 
          { label: 'Zheta' }
        ];
        return (
          <CheckboxGroup
            options={options}
          />
        )
      }
    }
  `,
  componentUsage: `
    class Demo extends React.Component {
      constructor(props) {
        super(props);

        this.handleCheckListClick = this.handleCheckListClick.bind(this);
      }

      handleCheckListClick (label) {
        alert('Clicked on ' + label);
      };

      render() {
        const options = [
          { label: 'Alpha' }, 
          { label: 'Beta'}, 
          { label: 'Zheta' }
        ];
        return (
          <PreviewElements>
            {/* Preview Block 1 */}
            <PreviewBlock header="Default Checkbox group">
              <CheckboxGroup
                options={options}
                onClick={this.handleCheckListClick}
              />
            </PreviewBlock>
            {/* Preview Block 2 */}
            <PreviewBlock header="Inline Checkbox group">
              <CheckboxGroup
                inline
                options={options}
              />
            </PreviewBlock>
          </PreviewElements>
        )
      }
    }
  `,
};