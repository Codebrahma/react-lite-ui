export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <TextInput>C</TextInput>;
    }
  }
  `,
  propsData: [
    {
      prop: 'TextInput  prop',
      defaultValue: 'default prop TextInput ',
      description: 'I am TextInput ing default description for component',
    },
    {
      prop: 'TextInput  some prop',
      defaultValue: 'some default prop TextInput ',
      description: 'I am some TextInput ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'TextInput ing description',
    },
    {
      name: 'default some theme',
      description: 'TextInput ing some description',
    },
  ],
  basicComponent: `
    <TextInput />
  `,
};