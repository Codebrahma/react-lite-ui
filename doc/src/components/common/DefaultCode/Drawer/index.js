export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Drawer>C</Drawer>;
    }
  }
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
              <Drawer open={this.state.open} onClose={() => this.handleDrawer(false)} >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
              </Drawer>
          </div>
        )
      }
    }
  `
};