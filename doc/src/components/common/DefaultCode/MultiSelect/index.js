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
      prop: 'MultiSelect  prop',
      defaultValue: 'default prop MultiSelect ',
      description: 'I am MultiSelect ing default description for component',
    },
    {
      prop: 'MultiSelect  some prop',
      defaultValue: 'some default prop MultiSelect ',
      description: 'I am some MultiSelect ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'MultiSelect ing description',
    },
    {
      name: 'default some theme',
      description: 'MultiSelect ing some description',
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