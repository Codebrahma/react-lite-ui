export const componentData = {
  htmlStructure: `
    <div class="navbarWrapper staticPosition defaultColor">
      <div class="innerWrapper">
        <!-- Optional left Icon -->
        <div class="leftIcon">
          <img src="/link is passed as prop" alt="navbar-left-logo" />
        </div>
        <div class="navbarContent">
          <div class="leftContent">
            <span class="title">Title</span>
          </div>
          <div class="rightContent">
            <!-- Children passed to component -->
            <span>Nav Item 01</span>
            <span>Nav Item 02</span>
          </div>
        </div>
        <!-- Optional right Icon -->
        <div class="rightIcon">
          <img src="/link is passed as prop" alt="navbar-left-logo" />
        </div>
      </div>
    </div>
  `,
  propsData: [
    {
      prop: 'children',
      type: 'Any',
      defaultValue: 'Navbar',
      description: 'All children components to be rendered inside the navbar',
    },
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Set a class to style the component',
    },
    {
      prop: 'position',
      type: 'String',
      defaultValue: 'static',
      description: 'Prop to define position of the navbar. Possible values are static, sticky, fixed, absolute and relative',
    },
    {
      prop: 'flat',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop to define presence of box-shadow to the navbar.',
    },
    {
      prop: 'color',
      type: 'String',
      defaultValue: 'default',
      description: 'Prop to define color of the navbar.',
    },
    {
      prop: 'title',
      type: 'String / Element',
      defaultValue: 'navbar',
      description: 'Prop to render logo or logo text of the navbar.',
    },
    {
      prop: 'leftIcon',
      type: 'Element',
      defaultValue: 'null',
      description: 'Prop to render icon on very left of the navbar.',
    },
    {
      prop: 'rightIcon',
      type: 'Element',
      defaultValue: 'null',
      description: 'Prop to render icon on very right of the navbar.',
    },
    {
      prop: 'onLeftIconClick',
      type: 'Function',
      defaultValue: '',
      description: 'Callback to be called when leftIcon is clicked.',
    },
    {
      prop: 'onRightIconClick',
      type: 'Function',
      defaultValue: '',
      description: 'Callback to be called when rightIcon is clicked.',
    },
  ],  
  themesData: [
    {
      name: 'navbarWrapper',
      description: 'Class used for the root element.',
    },
    {
      name: 'innerWrapper',
      description: 'Class used for the navbar content wrapping element.',
    },
    {
      name: 'leftContent',
      description: 'Class used for the left side content wrappng element(leftIcon and title).',
    },
    {
      name: 'rightContent',
      description: 'Class used for the right side content wrapping element(children and rightIcon).',
    },
    {
      name: 'leftIcon',
      description: 'Class used for the leftIcon element.',
    },
    {
      name: 'rightIcon',
      description: 'Class used for the rightIcon element.',
    },
    {
      name: 'title',
      description: 'Class used for the title when passed a string.',
    },
    {
      name: 'defaultColor',
      description: 'Class used for styling navbar color.',
    },
    {
      name: '${position}Position',
      description: 'Class used for the (static, sticky, fixed, absolute, relative) positioned navbar.',
    },
  ],
  basicComponent: `
    <Navbar title="logo" />
  `,
  componentUsage: `
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

        const MenuIcon = () => (
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" id="Layer_1"  version="1.1" viewBox="0 0 30 30" width="30px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
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
                <span>home</span>
                <span>dashboard</span>
                <span>contact</span>
              </Navbar>
            </PreviewBlock>
            { /* Preview Block-3 */ }
            <PreviewBlock header="Navbar with title as image or logo and flat (No box-shadow)">
              <Navbar flat title={<img src="https://picsum.photos/100/30" />}>
                <span>home</span>
                <span>dashboard</span>
                <span>contact</span>
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
  `,
};