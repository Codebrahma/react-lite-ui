export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <MultiSelect>C</MultiSelect>;
    }
  }
  `,
  propsData: [
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Additional class(es) for custom styling. These classes will be added along with library specific styles',
    },
    {
      prop: 'options',
      type: 'Array',
      defaultValue: '',
      description: 'Array of objects to display options (Required) .',
    },
    {
      prop: 'onSelect',
      type: 'Function',
      defaultValue: '',
      description: 'Callback when an option is selected.',
    },
  ],  
  themesData: [
    {
      name: 'select',
      description: 'Class used for the wrapper component.',
    },
    {
      name: 'menu',
      description: 'Class used for the dropdown menu.',
    },
    {
      name: 'option',
      description: 'Class used for dropdown items.',
    },
    {
      name: 'selectedInput',
      description: 'Class used for wrapper container of selected items.',
    },
    {
      name: 'selectInputWrapper',
      description: 'Class used for the wrapper container multiselect component ( Note: Multiselect dropdown menu is not wrapped by this wrapper element. ).',
    },
    {
      name: 'selected',
      description: 'Class for selected chip items.',
    },
    {
      name: 'selected-option',
      description: 'Class for selected options in the dropdown menu.',
    },
  ],
  basicComponent: `
    class Demo extends React.Component {
      render() {
        const options = [
            { label: 'Lorem' }, 
            { label: 'Ipsum'}, 
            { label: 'Dolor' },
            { label: 'Sit' },
            { label: 'Amet' },
            { label: 'Consectetur' },
            { label: 'Adipiscing' }
        ];
        return (
          <div>
              <MultiSelect
                options={options}
              />
          </div>
        )
      }
    }
  `,
};