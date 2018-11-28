export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <RadioButtonGroup>C</RadioButtonGroup>;
    }
  }
  `,
  propsData: [
    {
      prop: 'RadioButtonGroup  prop',
      defaultValue: 'default prop RadioButtonGroup ',
      description: 'I am RadioButtonGroup ing default description for component',
    },
    {
      prop: 'RadioButtonGroup  some prop',
      defaultValue: 'some default prop RadioButtonGroup ',
      description: 'I am some RadioButtonGroup ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'RadioButtonGroup ing description',
    },
    {
      name: 'default some theme',
      description: 'RadioButtonGroup ing some description',
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