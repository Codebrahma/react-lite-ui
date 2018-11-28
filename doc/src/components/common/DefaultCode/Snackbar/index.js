export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Snackbar>C</Snackbar>;
    }
  }
  `,
  propsData: [
    {
      prop: 'Snackbar  prop',
      defaultValue: 'default prop Snackbar ',
      description: 'I am Snackbar ing default description for component',
    },
    {
      prop: 'Snackbar  some prop',
      defaultValue: 'some default prop Snackbar ',
      description: 'I am some Snackbar ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'Snackbar ing description',
    },
    {
      name: 'default some theme',
      description: 'Snackbar ing some description',
    },
  ],
  basicComponent: `
    class SnackDisplay extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          showSnackbar: false,
        }
        this.openSnackbar = this.openSnackbar.bind(this);
        this.handleSnackClose = this.handleSnackClose.bind(this);
      }

      openSnackbar() {
        this.setState({
          showSnackbar: !this.state.showSnackbar
        });
      }
          
      handleSnackClose() {
        this.setState({
          showSnackbar: false,
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
            <div style={{margin: '10px'}}>
              <Button type="primary" onClick={this.openSnackbar}>Open Snackbar</Button>
            </div>
          </div>
        )
      }
    }
  `,
};