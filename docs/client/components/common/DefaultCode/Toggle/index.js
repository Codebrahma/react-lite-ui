export const defaultCode =   `
class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      toggled: !this.state.toggled,
    });
  }

  render() {
    return (
      <div>
        {/* Preview Block 1 */}
        <PreviewBlock header="Default toggle (without toggable)">
          <Toggle />
        </PreviewBlock>
        {/* Preview Block 2 */}
        <PreviewBlock header="Toggle with switch on (with toggable)">
          <Toggle 
            toggled={this.state.toggled}
            onClick={this.handleToggle}
          />
        </PreviewBlock>
      </div>
    )
  }
}
`;
