export const componentData = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <RadioButtonGroup>C</RadioButtonGroup>;
    }
  }
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
              inline
              options={options}
            />
          </div>
        )
      }
    }
  `,
};