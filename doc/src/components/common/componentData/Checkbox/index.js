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
          <PreviewElements>
            {/* PreviewBlock 1 */}
            <PreviewBlock header="Normal Checkbox">
              <Checkbox 
                onClick={this.handleCheckClick}
                checked={this.state.checked}
              />
            </PreviewBlock>
            {/* PreviewBlock 2 */}
            <PreviewBlock header="Checked by default">
              <Checkbox 
                label='default checked'
                checked
              />
            </PreviewBlock>
            {/* PreviewBlock 3 */}
            <PreviewBlock header="Checkbox with label">
              <Checkbox
                label='labelled checkbox'
              />
            </PreviewBlock>
          </PreviewElements>
        )
      }
    }
  `,
};