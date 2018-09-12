export const defaultCode = `
class Demo extends React.Component {
  render() {
    return (
      <div>
        <PreviewBlock header="Styled Buttons">
          <Button>Default</Button>
          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary</Button>
          <Button type="success">Success</Button>
          <Button type="danger">Danger</Button>
          <Button type="warning">Warning</Button>
          <Button type="info">Info</Button>
          <Button type="light">Light</Button>
          <Button type="dark">Dark</Button>
        </PreviewBlock>
        <PreviewBlock header="Sizable Buttons">
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
        </PreviewBlock>
      </div>
    )
  }
}
`;
