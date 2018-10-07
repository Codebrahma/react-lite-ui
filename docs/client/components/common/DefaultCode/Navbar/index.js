export const defaultCode =   `
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      opened: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }
  handleToggle() {
    this.setState(prevState => ({
      toggled: !prevState.toggled,
    }));
  }

  handleModal() {
    this.setState({
      opened: true,
    });
  }

  render() {

    const MenuIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" height="20px" id="Layer_1"  version="1.1" viewBox="0 0 32 32" width="20px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
    );

    return (
      <div>
        { /* Preview Block-1 */ }
        <PreviewBlock header="Simple Navbar">
          <Navbar />
        </PreviewBlock>
        { /* Preview Block-2 */ }
        <PreviewBlock header="Navbar with icon on left">
          <Navbar leftIcon={<MenuIcon />}>
            <ListItem />
            <ListItem />
          </Navbar>
        </PreviewBlock>
        { /* Preview Block-3 */ }
        <PreviewBlock header="Navbar with title as image or logo and flat (No box-shadow)">
          <Navbar flat title={<img src="https://picsum.photos/100/30" />} rightIcon={<MenuIcon />}>
            <ListItem />
            <ListItem />
          </Navbar>
        </PreviewBlock>
        { /* Preview Block-4 */ }
        <PreviewBlock header='Navbar with text title and profile icon on right'>
          <div style={{ marginBottom:'5px' }}>
            <Toggle
              toggled={this.state.toggled}
              onClick={this.handleToggle}
            />
            <span style={{ marginLeft: '5px' }}>{ this.state.toggled ? 'Logout' : 'Login' }</span>
          </div>
          <Navbar title="logo" rightIcon={this.state.toggled && <Avatar>c</Avatar>}>
            <ListItem />
            <ListItem />
          </Navbar>
        </PreviewBlock>
        { /* Preview Block-5 */ }
        <PreviewBlock header='Navbar with Login button on right'>
          <Navbar title='logo'>
            <ListItem />
            <ListItem />
            <Button onClick={this.handleModal}>Login</Button>
          </Navbar>
          <Modal title="You can do some login related stuff here" open={this.state.opened} />
        </PreviewBlock>
      </div>
    )
  }
}
`;
