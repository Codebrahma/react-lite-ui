export const componentData = {
  htmlStructure: `
    <span>
      <span class="checkbox">
        <input type="checkbox" />
        <span class="check-item" />
      </span>
      <span class="label">checkbox label</span>
    </span>
  `,
  propsData: [
    {
      prop: 'checked',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop that sends in the state of toggle',
    },
    {
      prop: 'inverted',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop that inverts the color of checkbox and checked item',
    },
    {
      prop: 'onClick',
      type: 'Function',
      defaultValue: '',
      description: 'Callback to be called when checked or unchecked',
    },
    {
      prop: 'additionalClass',
      type: 'String',
      defaultValue: '',
      description: 'Prop to send additional classNames for styling',
    },
    {
      prop: 'label',
      type: 'String',
      defaultValue: 'null',
      description: 'Prop to attach text next to the checkbox element.',
    },
  ],  
  themesData: [
    {
      name: 'checkbox',
      description: 'Class used for the root element.',
    },
    {
      name: 'checked',
      description: 'Class used for the element when checked.',
    },
    {
      name: 'inverted',
      description: 'Class used for the element when inverted.',
    },
    {
      name: 'label',
      description: 'Class used for the label text.',
    },
  ],
  basicComponent: `
    class Demo extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          checked: false,
        }
        this.handleCheckClick = this.handleCheckClick.bind(this);
      }

      handleCheckClick () {
        this.setState({
          checked: !this.state.checked,
        })
      }
      render() {
        return (
          <Checkbox 
            onClick={this.handleCheckClick}
            checked={this.state.checked}
            label='check me'
          />
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
          checked: false,
        }
        this.handleCheckClick = this.handleCheckClick.bind(this);
      }

      handleCheckClick (checked) {
        this.setState(prevState => ({
          [checked]: !prevState[checked],
        }))
      }
      render() {
        return (
          <div>
            <PreviewElements>
              <PreviewBlock header="Normal Checkbox">

              {/* Default Checkbox with no label */}
                <Checkbox 
                  onClick={() => this.handleCheckClick('checkOne')}
                  checked={this.state.checkOne}
                />

              </PreviewBlock>
              <PreviewBlock header="Invert Checkbox">

              {/* Invert styled checkbox */}
                <Checkbox
                  inverted
                  onClick={() => this.handleCheckClick('checkTwo')}
                  label='invert styled'
                  checked={this.state.checkTwo}
                />

              </PreviewBlock>
              <PreviewBlock header="Checked by default">

              {/* Checked by default and labelled */}
                <Checkbox 
                  label='default checked'
                  checked
                />

              </PreviewBlock>
            </PreviewElements>
            <PreviewElements>

              <PreviewBlock header="Custom labelled checkbox">
              {/* Custom Styled checkbox, Refer theme.scss */}
                <Checkbox 
                  theme={componentTheme}
                  label="custom checkbox"
                  onClick={() => this.handleCheckClick('checkFour')}
                  checked={this.state.checkFour}
                />

              </PreviewBlock>
              <PreviewBlock header="Custom Inverted">

              {/* Custom styled Invert checkbox, Refer theme.scss */}
                <Checkbox
                  inverted
                  theme={componentTheme}
                  onClick={() => this.handleCheckClick('checkFive')}
                  label='invert styled'
                  checked={this.state.checkFive}
                />

              </PreviewBlock>
              <PreviewBlock header="one more custom">

              {/* Custom styled checkbox, Refer theme.scss */}
                <Checkbox
                  theme={componentTheme}
                  onClick={() => this.handleCheckClick('checkSix')}
                  label='one more'
                  checked={this.state.checkSix}
                />

              </PreviewBlock>
            </PreviewElements>
          </div>
        )
      }
    }
  `,
  componentUsageTheme: `
    //  theme.scss
    
    :local(.label) {
      color: #144c52;
    }
    
    :local(.checkbox) {
      border-color: #6b76ff;
      .check-item {
        border-color: #6b76ff !important;
      }
    }
       
    :local(.inverted) {
      background-color: #0b409c !important;
      .check-item {
        border-color: #f18a9b !important;
      }
    }
  `,
};