export const defaultCode = `
class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.handleCheckClick = this.handleCheckClick.bind(this);
  }

  handleCheckClick () {
    alert('Clicked one of the checkbox');
  }
  render() {
    return (
      <div>
        {/* PreviewBlock 1 */}
        <PreviewBlock header="Normal Checkbox">
          <Checkbox 
            onClick={this.handleCheckClick}
          />
        </PreviewBlock>
        {/* PreviewBlock 2 */}
        <PreviewBlock header="Checked by default">
          <Checkbox 
            onClick={this.handleCheckClick}
            checked
          />
        </PreviewBlock>
        {/* PreviewBlock 3 */}
        <PreviewBlock header="Checkbox with label">
          <Checkbox 
            onClick={this.handleCheckClick}
          />
          <span style={{ marginLeft: '10px' }}>
            Label for the checkbox
          </span>
        </PreviewBlock>
      </div>
    )
  }
}
`;
