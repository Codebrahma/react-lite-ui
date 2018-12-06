export const componentData = {
  htmlStructure: `
    <div>
      <div class="radio-group">
        <div class="each-radio" id="radio-button">
          <label class="customized-radio">
            <label class="inner checked">
              <input type="radio">
            </label>
          </label>
          <label class="each-label">Alpha</label>
        </div>
      </div>
      <div class="clearfix"></div>
      <div class="radio-group">
        <div class="each-radio" id="radio-button">
          <label class="customized-radio">
            <label class="inner">
              <input type="radio">
            </label>
          </label>
          <label class="each-label">Alpha</label>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  `,
  propsData: [
    {
      prop: 'options',
      type: 'Array',
      defaultValue: '',
      description: 'Options to render radio buttons for. ( Required )',
    },
    {
      prop: 'onClick',
      type: 'Function',
      defaultValue: '',
      description: 'Callback function to be called when the radio button is clicked',
    },
    {
      prop: 'inline',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop to define the alignment of radio button group',
    },
  ],  
  themesData: [
    {
      name: 'radio-group',
      description: 'Class used for the root element.',
    },
    {
      name: 'customized-radio',
      description: 'Class used for the radio button element.',
    },
    {
      name: 'each-radio',
      description: 'Class used for the radio button wrapper element.',
    },
    {
      name: 'each-label',
      description: 'Class used for the label element.',
    },
  ],
  basicComponent: `
    class Demo extends React.Component {
      render() {
        const options = [
          { label: 'Alpha', value: 'Value-alpha' }, 
          { label: 'Beta', value: 'Value-beta'}, 
          { label: 'Zheta', value: 'Value-zheta' }
        ];
        return (
          <div>
            <RadioButtonGroup
              options={options}
            />
          </div>
        )
      }
    }
  `,
  componentUsage: `
    class Demo extends React.Component {
      constructor(props) {
        super(props);
        this.handleRadioButtonClick = this.handleRadioButtonClick.bind(this);
      }
      
      handleRadioButtonClick ({label,value}) {
        alert('Clicked on, label: ' + label + ', value: ' + value);
      };

      render() {
        const options = [
          { label: 'Alpha', value: 'Value-alpha' }, 
          { label: 'Beta', value: 'Value-beta'}, 
          { label: 'Zheta', value: 'Value-zheta' }
        ];
        return (
          <PreviewElements>
            {/* Preview Block 1 */}
            <PreviewBlock header="Default RadioButton group">
              <RadioButtonGroup
                options={options}
                onClick={this.handleRadioButtonClick}
              />
            </PreviewBlock>
            {/* Preview Block 2 */}
            <PreviewBlock header="Inline RadioButton group">
              <RadioButtonGroup
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