export const defaultCode = `
class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    }
    this.handleCheckClick = this.handleCheckClick.bind(this);
  }

  handleCheckClick () {
    this.setState({
      checked: !this.state.checked,
    })
  }
  render() {
    return (
      <div>
        {/* PreviewBlock 1 */}
        <PreviewBlock header="Normal Checkbox">
          <Checkbox 
            onClick={this.handleCheckClick}
            checked={this.state.checked}
          />
        </PreviewBlock>
        {/* PreviewBlock 2 */}
        <PreviewBlock header="Checked by default">
          <Checkbox 
            label='default checked'
            checked
          />
        </PreviewBlock>
        {/* PreviewBlock 3 */}
        <PreviewBlock header="Checkbox with label">
          <Checkbox
            label='labelled checkbox'
          />
        </PreviewBlock>
      </div>
    )
  }
}
`;
