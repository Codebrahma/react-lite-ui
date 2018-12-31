export const componentData = {
  htmlStructure: `
    <div aria-label="snackbar" class="snackbarWrappper bottom active">
      <div class="snackbar">
        <span>This is a bottom snackbar</span>
      </div>
    </div>
  `,
  propsData: [
    {
      prop: 'children',
      type: 'Any',
      defaultValue: 'null',
      description: 'All children components to be rendered inside the Snackbar',
    },
    {
      prop: 'timeout',
      type: 'Number',
      defaultValue: '2000',
      description: 'Timeout to auto hide the snackbar',
    },
    {
      prop: 'autoClose',
      type: 'Boolean',
      defaultValue: 'true',
      description: 'Prop to decide whether the snackbar should close automatically after the given timeout or not',
    },
    {
      prop: 'onClose',
      type: 'Function',
      defaultValue: 'null',
      description: 'The callback function to be called when the snackbar closes',
    },
    {
      prop: 'position',
      type: 'String',
      defaultValue: 'bottom',
      description: 'he position at which the snackbar should be show. The possible values are top, bottom',
    },
    {
      prop: 'additionalClasses',
      type: 'String',
      defaultValue: '',
      description: 'Prop to send in additional classNames for styling the component',
    },
  ],  
  themesData: [
    {
      name: 'snackbar',
      description: 'Class used for the snackbar element.',
    },
    {
      name: 'snackbarWrapper',
      description: 'Class used for snackbar wrapper element',
    },
    {
      name: 'snackbarContent',
      description: 'Class used for snackbar content',
    },
    {
      name: 'close',
      description: 'Class used for indefinite snackbar close icon',
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
  componentUsage: `
    class SnackDisplay extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          showSnackbar: false,
          showTopSnackbar: false,
          showIndefiniteSnackbar: false,
        }
        this.openBottomSnackbar = this.openBottomSnackbar.bind(this);
        this.openTopSnackbar = this.openTopSnackbar.bind(this);
        this.openIndefiniteSnackbar = this.openIndefiniteSnackbar.bind(this);
        this.handleSnackClose = this.handleSnackClose.bind(this);
        this.handleIndefiniteSnackClose = this.handleIndefiniteSnackClose.bind(this);
      }

      openBottomSnackbar() {
        this.setState({
          showSnackbar: !this.state.showSnackbar
        });
      }

      openTopSnackbar() {
        this.setState({
          showTopSnackbar: !this.state.showTopSnackbar
        });
      }

      openIndefiniteSnackbar() {
        this.setState({
          showIndefiniteSnackbar: !this.state.showIndefiniteSnackbar
        });
      }
      
      
      handleSnackClose() {
        this.setState({
          showSnackbar: false,
          showTopSnackbar: false,
        });
      }

      handleIndefiniteSnackClose() {
        this.setState({
          showIndefiniteSnackbar: false,
        })
      }

      render() {
        return (
          <div>
            <PreviewElements>
              <PreviewBlock header="Bottom snackbar">

              {/* Bottom Snackbar */}
                <Button type="primary" onClick={this.openBottomSnackbar}>
                  Open Bottom Snackbar
                </Button>

                <Snackbar
                  active={this.state.showSnackbar}
                  onClose={this.handleSnackClose}>
                  <span>This is a bottom snackbar.</span>
                </Snackbar>

              </PreviewBlock>
              <PreviewBlock header="Top snackbar">

              {/* Top Snackbar */}
                <Button type="primary" onClick={this.openTopSnackbar}>
                  Open Top Snackbar
                </Button>

                <Snackbar
                  active={this.state.showTopSnackbar}
                  onClose={this.handleSnackClose}
                  position='top'>
                  <span>This is a top snackbar.</span>
                </Snackbar>

              </PreviewBlock>
              <PreviewBlock header="Indefinite snackbar">

              {/* Indefenite Snackbar */}
                <Button type="primary" onClick={this.openIndefiniteSnackbar}>
                  <span>{this.state.showIndefiniteSnackbar ? 'Close' : 'Open'} indefinite Snackbar</span>
                </Button>

                <Snackbar
                  active={this.state.showIndefiniteSnackbar}
                  onClose={this.handleIndefiniteSnackClose}
                  autoClose={false}>
                  <span>This is a indefinite snackbar. Click x to close.</span>
                </Snackbar>
                 
              </PreviewBlock>
            </PreviewElements>
          </div>
        )
      }
    }
  `,
};