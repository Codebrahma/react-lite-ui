export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Card>C</Card>;
    }
  }
  `,
  propsData: [
    {
      prop: 'Card  prop',
      type: 'String',
      defaultValue: 'default prop Card ',
      description: 'I am Card ing default description for component',
    },
    {
      prop: 'Card  some prop',
      type: 'String',
      defaultValue: 'some default prop Card ',
      description: 'I am some Card ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'Card ing description',
    },
    {
      name: 'default some theme',
      description: 'Card ing some description',
    },
  ],
  basicComponent: `
    class Demo extends React.Component {
      render() {
        return (
          <Card
            header='Card String header'
            wrapContent
            expandedContent={
              () => <div>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>
            }>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Card>
        )
      }
    }
  `,
};