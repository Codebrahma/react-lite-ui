export const defaultCode = `
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      buttonContainer: {
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gridGap: 20
      }
    };
  }
  render() {
    return (
      <div>
        <PreviewBlock header="Styled Buttons">
          <div style={this.style.buttonContainer}>
            <Button>Primary</Button>
            <Button type="secondary">Secondary</Button>
            <Button type="success">Success</Button>
            <Button type="danger">Danger</Button>
            <Button type="warning">Warning</Button>
            <Button type="info">Info</Button>
            <Button type="dark">Dark</Button>
          </div>
        </PreviewBlock>
        <PreviewBlock header="Bordered Buttons">
          <div style={this.style.buttonContainer}>
            <Button bordered>Primary</Button>
            <Button type="secondary" bordered>Secondary</Button>
            <Button type="success" bordered>Success</Button>
            <Button type="danger" bordered>Danger</Button>
            <Button type="warning" bordered>Warning</Button>
            <Button type="info" bordered>Info</Button>
            <Button type="dark" bordered>Dark</Button>
          </div>
        </PreviewBlock>
        <PreviewBlock header="Sizable Buttons">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              gridGap: 20,
              alignItems: "center"
            }}
          >
            <Button type="primary" size="small">
              Small
            </Button>
            <Button type="primary" size="medium">
              Medium
            </Button>
            <Button type="primary" size="large">
              Large
            </Button>
          </div>
        </PreviewBlock>
      </div>
    );
  }
}
`;
