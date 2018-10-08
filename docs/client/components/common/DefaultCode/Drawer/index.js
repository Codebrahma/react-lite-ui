export const defaultCode = `
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleDrawer = this.handleDrawer.bind(this);
  }

  handleDrawer(open) {
    this.setState({
      open,
    });
  }

  render() {
    return (
      <div>
        <PreviewBlock header="Simple Drawer">
          <Button onClick={() => this.handleDrawer(true)} type="primary">click to open drawer</Button>
          <Drawer open={this.state.open} onClose={() => this.handleDrawer(false)} >
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
          </Drawer>
        </PreviewBlock>
      </div>
    )
  }
}
`;
