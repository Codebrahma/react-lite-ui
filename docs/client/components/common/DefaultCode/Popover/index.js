export const defaultCode = `
class Demo extends React.Component {
  render() {
    const text = <span>Title</span>;
    const content = (
      <div>
        <p>Content</p>
        <p>Content which is really longer than wrapper width</p>
      </div>
    );
    return (
      <PreviewBlock>
            <Popover position="topLeft" title={text} content={content}>
              <Button>TL</Button>
            </Popover>
      </PreviewBlock>
    )
  }
}
`;