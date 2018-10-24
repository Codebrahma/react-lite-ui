export const defaultCode = `
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
    })
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
      <PreviewBlock header="Default popup confirm component">
        <Popover content="Please confirm to proceed!" onConfirm={() => alert('Confirmed!!')}>
          <Button>Click to Proceed</Button>
        </Popover>
      </PreviewBlock>
      <PreviewBlock header="Popup with user defined action content">
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
      </PreviewBlock>
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
      </div>
    )
  }
}
`;