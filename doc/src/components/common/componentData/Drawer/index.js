export const componentData = {
  htmlStructure: `
    <div>
      <button class="button primary">
        Open Drawer
      </button>
    </div>
    <div class="drawer-container drawer-close">
      <div class="drawer left left-close">
        <div>
          <span>Drawer Item</span>
          <span>Drawer Item</span>
        </div>
      </div>
    </div>
  `,
  propsData: [
    {
      prop: 'children',
      type: 'Any',
      defaultValue: 'null',
      description: 'All children components to be rendered inside the drawer.',
    },
    {
      prop: 'position',
      type: 'String',
      defaultValue: 'left',
      description: '	Set a position for drawer. Possible values are: top, right, bottom or left',
    },
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Set a class to style the Component',
    },
    {
      prop: 'open',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Toggle drawer show / hide',
    },
    {
      prop: 'onClose',
      type: 'Function',
      defaultValue: '',
      description: 'Callback for close event in drawer.',
    },
  ],  
  themesData: [
    {
      name: 'drawer-container',
      description: 'Class used for the drawer container / backdrop element.',
    },
    {
      name: 'drawer-open',
      description: 'Class used for the drawer container / backdrop element in open state.',
    },
    {
      name: 'drawer-close',
      description: 'Class used for the drawer container / backdrop element in closed state.',
    },
    {
      name: 'drawer',
      description: 'Class used for the drawer element.',
    },
    {
      name: '${position}',
      description: 'Class used for the drawer element in (top, bottom, left, right) position.',
    },
    {
      name: '${position}-open',
      description: 'Class used for the drawer element in provided position ( top, right, bottom or left ) for open states.',
    },
    {
      name: '${position}-close',
      description: 'Class used for the drawer element in provided position ( top, right, bottom or left ) for closed states.',
    },
  ],
  basicComponent: `
    class Demo extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          open: false,
        };
        this.styles = {
          leftRightTitle: {
            display: 'flex',
            alignItems: 'center',
          },
          leftRightContent: {
            display: 'flex',
            flexDirection: 'column',
          },
          imageStyle: {
            width: '40px',
            height: '40px',
            marginTop: '1em',
          },
          link: {
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            padding: '15px 10px 15px 0',
            color: '#2c87d7',
          }
        }
        this.handleDrawer = this.handleDrawer.bind(this);
        this.renderDrawerContent = this.renderDrawerContent.bind(this);
      }

      renderDrawerContent() {
        const dummyContent = (title, link) => (
          <a href={link} style={this.styles.link}>{title}</a>
        );
        return (
          <div style={{textAlign: 'left'}}>
            <div style={this.styles.leftRightTitle}>
              <img src={match} alt="logo" style={this.styles.imageStyle}/>
              <h2 style={{marginLeft: '10px'}}>React Lite UI</h2>
            </div>
            <hr />
            <div style={this.styles.leftRightContent}>
              <h4>A set of light weight React Components</h4>
              {dummyContent('Documentation', 'https://codebrahma.com/react-lite-ui/documentation')}
              {dummyContent('Usage', 'https://codebrahma.com/react-lite-ui/usage')}
              {dummyContent('Playground', 'https://codebrahma.com/react-lite-ui/playground')}
              {dummyContent('Fork', 'https://github.com/Codebrahma/react-lite-ui')}
            </div>
          </div>
        )
      }

      handleDrawer(open) {
        this.setState({
          open,
        });
      }

      render() {
        return (
          <div>
              <Button onClick={() => this.handleDrawer(true)} type="primary">
                <span>{this.state.open ? 'close' : 'open'} Drawer</span>
              </Button>
              <Drawer open={this.state.open} onClose={() => this.handleDrawer(false)} position="right">
                {this.renderDrawerContent()}
              </Drawer>
          </div>
        )
      }
    }
  `,
  componentUsage: `
    class Demo extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          top: false,
          right: false,
          bottom: false,
          left: false,
        };
        this.styles = {
          leftRightTitle: {
            display: 'flex',
            alignItems: 'center',
          },
          topBottomTitle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          leftRightContent: {
            display: 'flex',
            flexDirection: 'column',
          },
          topBottomContent: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '20px',
          },
          imageStyle: {
            width: '40px',
            height: '40px',
            marginTop: '1em',
          },
          link: {
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            padding: '15px 10px 15px 0',
            color: '#2c87d7',
          }
        }
        this.handleDrawer = this.handleDrawer.bind(this);
        this.renderDrawerLeftRight = this.renderDrawerLeftRight.bind(this);
        this.renderDrawerTopBottom = this.renderDrawerTopBottom.bind(this);
      }

      handleDrawer(position, open) {
        this.setState({
          [position]: open,
        });
      }

      renderDrawerLeftRight() {
        const dummyContent = (title, link) => (
          <a href={link} style={this.styles.link}>{title}</a>
        );
        return (
          <div style={{textAlign: 'left'}}>
            <div style={this.styles.leftRightTitle}>
              <img src={match} alt="logo" style={this.styles.imageStyle}/>
              <h2 style={{marginLeft: '10px'}}>React Lite UI</h2>
            </div>
            <hr />
            <div style={this.styles.leftRightContent}>
              <h4>A set of light weight React Components</h4>
              {dummyContent('Documentation', 'https://codebrahma.com/react-lite-ui/documentation')}
              {dummyContent('Usage', 'https://codebrahma.com/react-lite-ui/usage')}
              {dummyContent('Playground', 'https://codebrahma.com/react-lite-ui/playground')}
              {dummyContent('Fork', 'https://github.com/Codebrahma/react-lite-ui')}
            </div>
          </div>
        )
      }

      renderDrawerTopBottom() {
        return (
          <div style={{textAlign: 'left'}}>
            <div style={this.styles.topBottomTitle}>
              <img src={match} alt="logo" style={this.styles.imageStyle}/>
              <h2 style={{marginLeft: '10px'}}>React Lite UI</h2>
            </div>
            <hr />
            <h4 style={{textAlign: 'center'}}>A set of light weight React Components</h4>
            <div style={this.styles.topBottomContent}>
              <Button size="medium" borderless href="https://codebrahma.com/react-lite-ui/documentation">Documentation</Button>
              <Button size="medium" borderless href="https://codebrahma.com/react-lite-ui/usage">Usage</Button>
              <Button size="medium" borderless href="https://codebrahma.com/react-lite-ui/playground">Playground</Button>
              <Button size="medium" borderless href="https://github.com/Codebrahma/react-lite-ui">Fork</Button>
            </div>
          </div>
        )
      }

      render() {
        return (
          <div>
            <PreviewElements>
              <PreviewBlock header="left drawer">

              {/* Left positioned Drawer */}
                <Button 
                  onClick={() => this.handleDrawer('left', true)}
                  type="primary"
                >
                  left
                </Button>

                <Drawer
                  open={this.state.left}
                  onClose={() => this.handleDrawer('left', false)}
                >
                  {this.renderDrawerLeftRight()}
                </Drawer>

              </PreviewBlock>
              <PreviewBlock header="right drawer">

              {/* Right positioned Drawer */}
                <Button 
                  onClick={() => this.handleDrawer('right', true)}
                  type="primary"
                >
                  right
                </Button>

                <Drawer
                  open={this.state.right}
                  position="right"
                  onClose={() => this.handleDrawer('right', false)}
                >
                  {this.renderDrawerLeftRight()}
                </Drawer>

              </PreviewBlock>
            </PreviewElements>
            <PreviewElements>
              <PreviewBlock header="top drawer">

              {/* Top positioned Drawer */}
                <Button 
                  onClick={() => this.handleDrawer('top', true)}
                  type="primary"
                >
                  top
                </Button>

                <Drawer
                  open={this.state.top}
                  position="top"
                  onClose={() => this.handleDrawer('top', false)}
                >
                  {this.renderDrawerTopBottom()}
                </Drawer>

              </PreviewBlock>
              <PreviewBlock header="bottom drawer">

              {/* Bottom positioned Drawer */}
                <Button 
                  onClick={() => this.handleDrawer('bottom', true)}
                  type="primary"
                >
                  bottom
                </Button>

                <Drawer
                  open={this.state.bottom}
                  position="bottom"
                  onClose={() => this.handleDrawer('bottom', false)}
                >
                  {this.renderDrawerTopBottom()}
                </Drawer>

              </PreviewBlock>
            </PreviewElements>
          </div>
        )
      }
    }
  `,
};