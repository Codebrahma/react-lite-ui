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
      prop: 'Drawer  prop',
      defaultValue: 'default prop Drawer ',
      description: 'I am Drawer ing default description for component',
    },
    {
      prop: 'Drawer  some prop',
      defaultValue: 'some default prop Drawer ',
      description: 'I am some Drawer ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'Drawer ing description',
    },
    {
      name: 'default some theme',
      description: 'Drawer ing some description',
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