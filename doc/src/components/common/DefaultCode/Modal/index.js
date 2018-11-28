export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Modal>C</Modal>;
    }
  }
  `,
  propsData: [
    {
      prop: 'Modal  prop',
      defaultValue: 'default prop Modal ',
      description: 'I am Modal ing default description for component',
    },
    {
      prop: 'Modal  some prop',
      defaultValue: 'some default prop Modal ',
      description: 'I am some Modal ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'Modal ing description',
    },
    {
      name: 'default some theme',
      description: 'Modal ing some description',
    },
  ],
  basicComponent: `
    class Demo extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          open: false
        }
        this.toggleModal = this.toggleModal.bind(this);
      }

      toggleModal() {
      this.setState({ 
          open: true
        });
      }
      
      render() {
        return (
          <div>
            <Button type="primary" onClick={this.toggleModal}>Click to Open Modal</Button>
              <Modal title="This is sample modal" open={this.state.open}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Modal>
          </div>
        )
      }
    }
  `
};