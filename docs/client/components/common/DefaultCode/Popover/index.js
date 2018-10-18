export const defaultCode = `
class Demo extends React.Component {
  render() {
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
      <PreviewBlock header="Popover with various positions">
        <div style={style.popoverContainer}>
          <div style={style.dFlex}>
            <Popover position="topLeft" title="title" content={content}>
              <Button>TL</Button>
            </Popover>
            <Popover position="top" title="title" content={content}>
              <Button>T</Button>
            </Popover>
            <Popover position="topRight" title="title" content={content}>
              <Button>TR</Button>
            </Popover>
          </div>
          <div style={style.dFlex}>
            <Popover position="leftTop" title="title" content={content}>
              <Button>LT</Button>
            </Popover>
            <Popover position="rightTop" title="title" content={content}>
              <Button>RT</Button>
            </Popover>
          </div>
          <div style={style.dFlex}>
            <Popover position="left" title="title" content={content}>
              <Button>L</Button>
            </Popover>
            <Popover position="right" title="title" content={content}>
              <Button>R</Button>
            </Popover>
          </div>
          <div style={style.dFlex}>
            <Popover position="leftBottom" title="title" content={content}>
              <Button>LB</Button>
            </Popover>
            <Popover position="rightBottom" title="title" content={content}>
              <Button>RB</Button>
            </Popover>
          </div>
          <div style={style.dFlex}>
            <Popover position="bottomLeft" title="title" content={content}>
              <Button>BL</Button>
            </Popover>
            <Popover position="bottom" title="title" content={content}>
              <Button>B</Button>
            </Popover>
            <Popover position="bottomRight" title="title" content={content}>
              <Button>BR</Button>
            </Popover>
          </div>
        </div>
      </PreviewBlock>
    )
  }
}
`;