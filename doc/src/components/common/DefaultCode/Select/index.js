export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Select>C</Select>;
    }
  }
  `,
  propsData: [
    {
      prop: 'Select  prop',
      defaultValue: 'default prop Select ',
      description: 'I am Select ing default description for component',
    },
    {
      prop: 'Select  some prop',
      defaultValue: 'some default prop Select ',
      description: 'I am some Select ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'Select ing description',
    },
    {
      name: 'default some theme',
      description: 'Select ing some description',
    },
  ],
  basicComponent: `
    class Demo extends React.Component {
      render() {
        const options = [
          { label: 'Lorem' }, 
          { label: 'Ipsum'}, 
          { label: 'Dolor' }
        ];
        return (
          <div>
            <Select
              options={options}
            />
          </div>
        )
      }
    }
  `,
};