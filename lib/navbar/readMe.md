## Navbar

The base navbar component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `children` | `any` | `Navbar` | All children components to be rendered inside the navbar |
| `className` | `String` | &nbsp; | Set a class to style the component |
| `position` | `String` | `static` | Prop to define position of the navbar. Possible values are `static`, `sticky`, `fixed`, `absolute` and `relative` |
| `flat` | `bool` | `false` | Prop to define presence of box-shadow to the navbar. |
| `color` | `String` | `default` | Prop to define color of the navbar. |
| `title` | `String or Element` | `navbar` | Prop to render logo or logo text of the navbar. |
| `leftIcon` | `Element` | `null` | Prop to render icon on very left of the navbar. |
| `rightIcon` | `Element` | `null` | Prop to render icon on very right of the navbar. |
| `onLeftIconClick` | `function` | &nbsp; | Callback to be called when leftIcon is clicked. |
| `onRightIconClick` | `function` | &nbsp; | Callback to be called when rightIcon is clicked. |

### Theme

| Name     | Description|
|:---------|:-----------|
| `navbarWrapper`   | Class used for the root element.|
| `innerWrapper`   | Class used for the navbar content wrapping element.|
| `leftContent`   | Class used for the left side content wrappng element(`leftIcon` and `title`).|
| `rightContent`   | Class used for the right side content wrapping element(`children` and `rightIcon`).|
| `leftIcon`   | Class used for the leftIcon element.|
| `rightIcon`   | Class used for the rightIcon element.|
| `title`   | Class used for the title when passed a string.|
| `defaultColor`   | Class used for styling navbar color.|
| `staticPosition`   | Class used for the static positioned navbar.|
| `stickyPosition`   | Class used for the sticky positioned navbar.|
| `fixedPosition`   | Class used for the fixed positioned navbar.|
| `absolutePosition`   | Class used for the absolute positioned navbar.|
| `relativePosition`   | Class used for the relative positioned navbar.|

### Usage
```

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
      <svg xmlns="http://www.w3.org/2000/svg" height="20px" id="Layer_1"  version="1.1" viewBox="0 0 32 32" width="20px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
    );

    const NavLink = ({link}) => (
      <div style={{padding: '0 5px'}}>{link}</div>
    );

    return (
      <div>
          <Navbar leftIcon={<MenuIcon />}>
            <NavLink link='item-1'/>
            <NavLink link='item-2'/>
            <NavLink link='item-3'/>
          </Navbar>
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
      </div>
    )
  }
}
```
