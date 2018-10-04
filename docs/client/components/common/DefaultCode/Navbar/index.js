export const defaultCode =   `
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState(prevState => ({
      toggled: !prevState.toggled,
    }));
  }

  render() {
    return (
      <div>
        { /* Preview Block-1 */ }
        <PreviewBlock header="Simple Navbar">
          <Navbar>
            Simple Navbar
          </Navbar>
        </PreviewBlock>
        { /* Preview Block-2 */ }
        <PreviewBlock header="Navbar with Login">
          <div style={{marginBottom: '5px'}}>
          <Toggle
          toggled={this.state.toggled}
          onClick={this.handleToggle}
          />
          {this.state.toggled ? 'Logout' : 'Login'}
          </div>
          <Navbar>
            Navbar
            {
              this.state.toggled && <Avatar onClick={() => alert('clicked avatar')}>k</Avatar>
            }
          </Navbar>
        </PreviewBlock>
        { /* Preview Block-3 */ }
        <PreviewBlock header="Navbar with search field">
          <Navbar>
            Input Navbar
            <TextInput placeholder='Search...' width='150px'/>
          </Navbar>
        </PreviewBlock>
        { /* Preview Block-4 */ }
        <PreviewBlock header="Navbar with menu button">
          <Navbar onMenuClick={() => alert('Clicked Menu Button')}>
            Menu Navbar
          </Navbar>
        </PreviewBlock>
        { /* Preview Block-5 */ }
        <PreviewBlock header="Navbar with button">
          <Navbar>
            Navbar
            <Button type='light' onClick={() => alert('Clicked Login Button')}>login</Button>
          </Navbar>
        </PreviewBlock>
      </div>
    )
  }
}
`;
