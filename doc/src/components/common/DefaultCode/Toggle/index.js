export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Toggle>C</Toggle>;
    }
  }
  `,
  propsData: [
    {
      prop: 'Toggle  prop',
      defaultValue: 'default prop Toggle ',
      description: 'I am Toggle ing default description for component',
    },
    {
      prop: 'Toggle  some prop',
      defaultValue: 'some default prop Toggle ',
      description: 'I am some Toggle ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'Toggle ing description',
    },
    {
      name: 'default some theme',
      description: 'Toggle ing some description',
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
};