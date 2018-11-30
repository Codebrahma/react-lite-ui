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
      prop: 'children',
      type: 'Any',
      defaultValue: 'null',
      description: 'All children components to be rendered inside the modal. Note: children is given preference over title, body and footer props',
    },
    {
      prop: 'title',
      type: 'String',
      defaultValue: '',
      description: 'Title for modal. ( Displayed only when no children are passed.)',
    },
    {
      prop: 'body',
      type: 'Any',
      defaultValue: 'null',
      description: 'Modal Body / Content section. ( Displayed only when no children are passed. )',
    },
    {
      prop: 'footer',
      type: 'Any',
      defaultValue: 'null',
      description: 'Footer content for modal. ( Displayed only when no children are passed. )',
    },
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Set a class to style the Component',
    },
    {
      prop: 'open',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Toggle modal show / hide. ( Required )',
    },
    {
      prop: 'closeOnBackdropClick',
      type: 'Boolean',
      defaultValue: 'true',
      description: 'Set wether to allow modal to close on clicking modal backdrop.',
    },
  ],  
  themesData: [
    {
      name: 'modal-backdrop',
      description: 'Class used for the modal backdrop element.',
    },
    {
      name: 'modal',
      description: 'Class used for the modal element.',
    },
    {
      name: 'modal-title',
      description: 'Class used for the default modal title element when title prop is passed.',
    },
    {
      name: 'modal-body',
      description: 'Class used for the default modal content element when body prop is passed',
    },
    {
      name: 'modal-footer',
      description: 'Class used for the default modal footer element when footer prop is passed.',
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