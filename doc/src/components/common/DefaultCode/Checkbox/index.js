export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Checkbox>C</Checkbox>;
    }
  }
  `,
  propsData: [
    {
      prop: 'Checkbox  prop',
      type: 'String',
      defaultValue: 'default prop Checkbox ',
      description: 'I am Checkbox ing default description for component',
    },
    {
      prop: 'Checkbox  some prop',
      type: 'String',
      defaultValue: 'some default prop Checkbox ',
      description: 'I am some Checkbox ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'Checkbox ing description',
    },
    {
      name: 'default some theme',
      description: 'Checkbox ing some description',
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
  `
};