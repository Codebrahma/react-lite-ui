export const defaultCode = `
class Demo extends React.Component {
  render() {
    return (
      <div>
        <PreviewBlock header="Styled Buttons">
        <div style={{display: 'grid',
        gridTemplateColumns: 'auto auto auto', gridGap: 20}} >
          <Button>Default</Button>
          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary</Button>
          <Button type="success">Success</Button>
          <Button type="danger">Danger</Button>
          <Button type="warning">Warning</Button>
          <Button type="info">Info</Button>
          <Button type="light">Light</Button>
          <Button type="dark">Dark</Button>
          </div>
        </PreviewBlock>
        <PreviewBlock header="Sizable Buttons">
        <div style={{display: 'grid',
        gridTemplateColumns: 'auto auto auto', gridGap: 20, alignItems: 'center'}} >
          <Button 
            type="primary"
            size="small"
          >
            Small
          </Button> 
          <Button
            type="primary"
            size="medium"
          >
            Medium
          </Button>
          <Button 
            type="primary"
            size="large"
          >
            Large
          </Button>
          </div>
        </PreviewBlock>
      </div>
    )
  }
}
`;
