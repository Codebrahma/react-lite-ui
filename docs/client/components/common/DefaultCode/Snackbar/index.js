export const defaultCode = `
class SnackDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSnackbar: false,
      showTopSnackbar: false,
      showIndefiniteSnackbar: false,
    }
    this.openBottomSnackbar = this.openBottomSnackbar.bind(this);
    this.openTopSnackbar = this.openTopSnackbar.bind(this);
    this.openIndefiniteSnackbar = this.openIndefiniteSnackbar.bind(this);
    this.handleSnackClose = this.handleSnackClose.bind(this);
  }

  openBottomSnackbar() {
    this.setState({
      showSnackbar: !this.state.showSnackbar
    });
  }

  openTopSnackbar() {
    this.setState({
      showTopSnackbar: !this.state.showTopSnackbar
    });
  }

  openIndefiniteSnackbar() {
    this.setState({
      showIndefiniteSnackbar: !this.state.showIndefiniteSnackbar
    });
  }
  
  
  handleSnackClose() {
    this.setState({
      showSnackbar: false,
      showTopSnackbar: false,
    });
  }

  render() {
    return (
      <div>
        <Snackbar
          active={this.state.showSnackbar}
          onClose={this.handleSnackClose}>
          <span>This is a bottom snackbar.</span>
        </Snackbar>
        <Snackbar
          active={this.state.showTopSnackbar}
          onClose={this.handleSnackClose}
          position='top'>
          <span>This is a top snackbar.</span>
        </Snackbar>
        <Snackbar
          active={this.state.showIndefiniteSnackbar}
          onClose={this.handleSnackClose}
          autoClose={false}>
          <span>This is a indefinite snackbar.</span>
        </Snackbar>
        <div style={{margin: '10px'}}>
          <Button type="primary" onClick={this.openBottomSnackbar}>Open Bottom Snackbar</Button>
        </div>
        <div style={{margin: '10px'}}>
          <Button type="primary" onClick={this.openTopSnackbar}>Open Top Snackbar</Button>
        </div>
        <div style={{margin: '10px'}}>
          <Button type="primary" onClick={this.openIndefiniteSnackbar}>{this.state.showIndefiniteSnackbar ? 'Close' : 'Open'} indefinite Snackbar</Button>
        </div>
      </div>
    )
  }
}
`