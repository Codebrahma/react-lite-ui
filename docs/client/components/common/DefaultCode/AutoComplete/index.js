export const defaultCode = `
class Demo extends React.Component {
    render() {
        const data = [
            { label: 'lorem' },
            { label: 'ipsum' }
        ];
      return (
        <div>
          <PreviewBlock header="AutoComplete">
            <AutoComplete data={data} />
          </PreviewBlock>
        </div>
      )
    }
  }
`