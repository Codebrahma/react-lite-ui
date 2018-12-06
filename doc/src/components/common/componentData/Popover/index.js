export const componentData = {
  htmlStructure: `
    <div class="popover">
      <div class="contentWrapper">
        <div>
          <button class="button warning">
            Delete
          </button>
        </div>
      </div>
      <!-- Conditionally rendered -->
      <div class="popoverWrapper rightPopover">
        <span class="title">optional popover title</span>
        <div class="popoverContent">
          Are you sure to delete?
        </div>
        <span class="actionWrapper">
          <span class="actionContent">Confirm</span>
        </span>
        <span class="popoverArrow"/>
      </div>
    </div>
  `,
  propsData: [
    {
      prop: 'children',
      type: 'Any',
      defaultValue: 'null',
      description: 'children to be rendered with popover. ( Required )',
    },
    {
      prop: 'title',
      type: 'String',
      defaultValue: '',
      description: 'Prop to set the title of popover.',
    },
    {
      prop: 'content',
      type: 'Any',
      defaultValue: '',
      description: 'Prop to render the content of popover. (Required)',
    },
    {
      prop: 'actionContent',
      type: 'Any',
      defaultValue: 'confirm',
      description: 'Prop to render the content of action in popover.',
    },
    {
      prop: 'position',
      type: 'String',
      defaultValue: 'bottomLeft',
      description: 'Prop to set the position of popover. Possible positions are topLeft, top, topRight, bottomLeft, bottom, bottomRight, leftTop, left, leftBottom, rightTop, right and rightBottom',
    },
    {
      prop: 'onConfirm',
      type: 'Funtion',
      defaultValue: '',
      description: 'Callback to be called when clicked on action button.',
    },
    {
      prop: 'noAction',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop to be sent when no action is required from popover.',
    },
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Set a class to style the component.',
    },
  ],  
  themesData: [
    {
      name: 'popover',
      description: 'Class used for the root element.',
    },
    {
      name: 'popoverWrapper',
      description: 'Class used for the popover element.',
    },
    {
      name: '${position}Popover',
      description: 'Class used for the positioning the popover element.',
    },
    {
      name: 'contentWrapper',
      description: 'Class used for the children.',
    },
    {
      name: 'title',
      description: 'Class used for the title of popover.',
    },
    {
      name: 'popoverContent',
      description: 'Class used for the content of popover.',
    },
    {
      name: 'popoverArrow',
      description: 'Class used for the arrow of popover.',
    },
    {
      name: 'actionWrapper',
      description: 'Class used for the root of action element.',
    },
    {
      name: 'actionContent',
      description: 'Class used for the content of action element.',
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
  componentUsage: `
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
        const style = {
          popoverContainer: {
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr 1fr",
            gridTemplateColumns: "300px",
            gridGap: 10
          },
          dFlex: {
            display: "flex",
            justifyContent: "space-between"
          }
        }
        const content = (
          <div>
            <p>Content</p>
            <p>Some more content</p>
          </div>
        );
        return (
          <div>
            <PreviewElements>
              <PreviewBlock header="Default popover">
                <Popover
                  content="Please confirm to proceed!"
                  onConfirm={() => alert('Confirmed!!')}
                  position="right"
                >
                  <Button>Click to Proceed</Button>
                </Popover>
              </PreviewBlock>
              <PreviewBlock header="User defined action">
                <Popover
                  content="Are you sure to delete?"
                  actionContent={<Button type="danger">Confirm</Button>}
                  onConfirm={this.handleDelete}
                >
                  <Button
                    type={deleted ? 'danger' : 'warning'}
                    disabled={deleted}
                  >
                    {deleted ? 'deleted' : 'confirm delete'}
                  </Button>
                </Popover>
              </PreviewBlock>
          </PreviewElements>
          <PreviewElements>
            <PreviewBlock header="Popover with various positions">
                <div style={style.popoverContainer}>
                  <div style={style.dFlex}>
                    <Popover position="topLeft" title="top left" content={content}>
                      <Button>TL</Button>
                    </Popover>
                    <Popover position="top" title="top" content={content}>
                      <Button>T</Button>
                    </Popover>
                    <Popover position="topRight" title="top right" content={content}>
                      <Button>TR</Button>
                    </Popover>
                  </div>
                  <div style={style.dFlex}>
                    <Popover position="leftTop" title="left top" content={content}>
                      <Button>LT</Button>
                    </Popover>
                    <Popover position="rightTop" title="right top" content={content}>
                      <Button>RT</Button>
                    </Popover>
                  </div>
                  <div style={style.dFlex}>
                    <Popover position="left" title="left" content={content}>
                      <Button>L</Button>
                    </Popover>
                    <Popover position="right" title="right" content={content}>
                      <Button>R</Button>
                    </Popover>
                  </div>
                  <div style={style.dFlex}>
                    <Popover position="leftBottom" title="left bottom" content={content}>
                      <Button>LB</Button>
                    </Popover>
                    <Popover position="rightBottom" title="right bottom" content={content}>
                      <Button>RB</Button>
                    </Popover>
                  </div>
                  <div style={style.dFlex}>
                    <Popover position="bottomLeft" title="bottom left" content={content}>
                      <Button>BL</Button>
                    </Popover>
                    <Popover position="bottom" title="bottom" content={content}>
                      <Button>B</Button>
                    </Popover>
                    <Popover position="bottomRight" title="bottom right" content={content}>
                      <Button>BR</Button>
                    </Popover>
                  </div>
                </div>
              </PreviewBlock>
            </PreviewElements>
          </div>
        )
      }
    }
  `,
};