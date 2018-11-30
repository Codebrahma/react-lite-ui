export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <CheckboxGroup>C</CheckboxGroup>;
    }
  }
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
  `
};