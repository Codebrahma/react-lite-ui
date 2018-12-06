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
        this.handleDrawer = this.handleDrawer.bind(this);
      }

      handleDrawer(open) {
        this.setState({
          open,
        });
      }

      render() {
        return (
          <div>
              <Button onClick={() => this.handleDrawer(true)} type="primary">click to open drawer</Button>
              <Drawer open={this.state.open} onClose={() => this.handleDrawer(false)} position="right">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
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
        this.handleDrawer = this.handleDrawer.bind(this);
      }

      handleDrawer(position, open) {
        this.setState({
          [position]: open,
        });
      }

      render() {
        return (
          <div>
            <PreviewElements>
              <PreviewBlock header="left drawer">
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
                  <div>Item 1</div>
                  <div>Item 2</div>
                  <div>Item 3</div>
                </Drawer>
              </PreviewBlock>
              <PreviewBlock header="right drawer">
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
                  <div>Item 1</div>
                  <div>Item 2</div>
                  <div>Item 3</div>
                </Drawer>
              </PreviewBlock>
            </PreviewElements>
            <PreviewElements>
              <PreviewBlock header="top drawer">
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
                  <div>Item 1</div>
                  <div>Item 2</div>
                  <div>Item 3</div>
                </Drawer>
              </PreviewBlock>
              <PreviewBlock header="bottom drawer">
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
                  <div>Item 1</div>
                  <div>Item 2</div>
                  <div>Item 3</div>
                </Drawer>
              </PreviewBlock>
            </PreviewElements>
          </div>
        )
      }
    }
  `,
};