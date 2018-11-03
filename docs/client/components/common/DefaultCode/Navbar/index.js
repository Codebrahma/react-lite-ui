export const defaultCode =   `
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
    this.renderDesktopView = this.renderDesktopView.bind(this);
    this.renderMobileView = this.renderMobileView.bind(this);
  }
  handleToggle() {
    this.setState(prevState => ({
      toggled: !prevState.toggled,
    }));
  }

  renderMenu() {
    return (
      <div className="navlinks">
        <span>home</span>
        <span>dashboard</span>
        <span>contact</span>
      </div>
    )
  }

  renderDesktopView() {
    return (
      <div className="navbarMenu">
        { this.renderMenu() }
      </div>
    )
  }

  renderMobileView() {
    return (
      <div className="navbarMobileMenu">
        <Popover content={ this.renderMenu() } position="bottomRight" noAction>
          <span className="icon-menu" />
        </Popover>
      </div>
    )
  }

  render() {

    const MenuIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" id="Layer_1"  version="1.1" viewBox="0 0 32 32" width="50px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
    );

    return (
      <div>
        { /* Preview Block-1 */ }
        <PreviewBlock header="Simple Navbar">
          <Navbar title='navbar'/>
        </PreviewBlock>
        { /* Preview Block-2 */ }
        <PreviewBlock header="Navbar with icon on left">
          <Navbar leftIcon={<MenuIcon />} title="logo">
            {this.renderDesktopView()}
            {this.renderMobileView()}
          </Navbar>
        </PreviewBlock>
        { /* Preview Block-3 */ }
        <PreviewBlock header="Navbar with title as image or logo and flat (No box-shadow)">
          <Navbar flat title={<img src="https://picsum.photos/100/30" />}>
            {this.renderDesktopView()}
            {this.renderMobileView()}
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
            <TextInput width="150px" placeholder='search users'/>
          </Navbar>
        </PreviewBlock>
      </div>
    )
  }
}
`;
