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
    //  Component.js

    class Demo extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          toggleOne: true,
          toggleTwo: true,
        };
        this.handleToggle = this.handleToggle.bind(this);
      }

      handleToggle(toggled) {
        this.setState(prevState => ({
          [toggled]: !prevState[toggled],
        }));
      }

      render() {
        return (
          <PreviewElements>
            <PreviewBlock header="Default toggle">

            {/* Default Toggle */}
              <Toggle
                toggled={this.state.toggleOne}
                onClick={() => this.handleToggle('toggleOne')}
              />

            </PreviewBlock>
            <PreviewBlock header="Toggle with switch on (with toggable)">
              
            {/* Custom Toggle, Refer theme.scss */}
              <Toggle 
                toggled={this.state.toggleTwo}
                onClick={() => this.handleToggle('toggleTwo')}
                theme={componentTheme}
              />

            </PreviewBlock>
          </PreviewElements>
        )
      }
    }
  `,
  componentUsageTheme: `
    //  theme.scss

    :local(.toggle) {
      background-color: burlywood;
      &:before {
        background-color: blanchedalmond;
      }
    }
    
    :local(.toggled) {
      background-color: chartreuse;
    }
  `,
};