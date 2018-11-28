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
      prop: 'CheckboxGroup  prop',
      type: 'String',
      defaultValue: 'default prop CheckboxGroup ',
      description: 'I am CheckboxGroup ing default description for component',
    },
    {
      prop: 'CheckboxGroup  some prop',
      type: 'String',
      defaultValue: 'some default prop CheckboxGroup ',
      description: 'I am some CheckboxGroup ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'CheckboxGroup ing description',
    },
    {
      name: 'default some theme',
      description: 'CheckboxGroup ing some description',
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