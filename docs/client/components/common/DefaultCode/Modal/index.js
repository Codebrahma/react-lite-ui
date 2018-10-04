export const defaultCode =   `
class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
  this.setState({ 
      open: true
    });
  }
  
  render() {
    return (
      <div>
        <PreviewBlock header="Simple Modal">
        <Button type="primary" onClick={this.toggleModal}>Click to Open Modal</Button>
          <Modal title="This is sample modal" open={this.state.open}/>
        </PreviewBlock>
      </div>
    )
  }
}
`;
