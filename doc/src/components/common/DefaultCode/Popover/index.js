export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Popover>C</Popover>;
    }
  }
  `,
  propsData: [
    {
      prop: 'Popover  prop',
      defaultValue: 'default prop Popover ',
      description: 'I am Popover ing default description for component',
    },
    {
      prop: 'Popover  some prop',
      defaultValue: 'some default prop Popover ',
      description: 'I am some Popover ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'Popover ing description',
    },
    {
      name: 'default some theme',
      description: 'Popover ing some description',
    },
  ],
  basicComponent: `
    class Demo extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          deleted: false,
        }
        this.handleDelete = this.handleDelete.bind(this);
      }

      handleDelete() {
        this.setState({
          deleted: true,
        });
        return true;
      }

      render() {
        const { deleted } = this.state;
        return (
          <div>
            <Popover
              content="Are you sure to delete?"
              actionContent={<Button type="danger">Confirm</Button>}
              onConfirm={this.handleDelete}
              position="right"
            >
              <Button
                type={deleted ? 'danger' : 'warning'}
                disabled={deleted}
              >
                {deleted ? 'deleted' : 'delete'}
              </Button>
            </Popover>
          </div>
        )
      }
    }
  `,
};