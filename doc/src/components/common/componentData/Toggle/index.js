export const componentData = {
  htmlStructure: `
    <label class="toggle toggled" id="toggle_component">
      <input type="checkbox" name="toggle" />
      <span class="toggle-item"></span>
    </label>
  `,
  propsData: [
    {
      prop: 'toggled',
      type: 'Boolean',
      defaultValue: 'false',
      description: '	Prop that sends in the state of toggle',
    },
    {
      prop: 'onClick',
      type: 'Function',
      defaultValue: '',
      description: 'Callback to be called when toggled or untoggled',
    },
    {
      prop: 'label',
      type: 'String',
      defaultValue: 'toggle',
      description: 'Prop to send when a callback value is required onClick',
    },
    {
      prop: 'additionalClass',
      type: 'String',
      defaultValue: '',
      description: 'Prop to send additional classNames for styling',
    },
  ],  
  themesData: [
    {
      name: 'toggle',
      description: 'Class used for the root element.',
    },
    {
      name: 'toggled',
      description: 'Class used for the element when toggled.',
    },
  ],
  basicComponent: `
    class Demo extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          toggled: true,
        };
        this.handleToggle = this.handleToggle.bind(this);
      }

      handleToggle() {
        this.setState({
          toggled: !this.state.toggled,
        });
      }

      render() {
        return (
          <div>
              <Toggle 
                toggled={this.state.toggled}
                onClick={this.handleToggle}
              />
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
          toggled: true,
        };
        this.handleToggle = this.handleToggle.bind(this);
      }

      handleToggle() {
        this.setState({
          toggled: !this.state.toggled,
        });
      }

      render() {
        return (
          <PreviewElements>
            {/* Preview Block 1 */}
            <PreviewBlock header="Default toggle (disabled)">
              <Toggle />
            </PreviewBlock>
            {/* Preview Block 2 */}
            <PreviewBlock header="Toggle with switch on (with toggable)">
              <Toggle 
                toggled={this.state.toggled}
                onClick={this.handleToggle}
              />
            </PreviewBlock>
          </PreviewElements>
        )
      }
    }
  `,
};