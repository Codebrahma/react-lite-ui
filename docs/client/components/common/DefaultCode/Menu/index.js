export const defaultCode =   `
class Demo extends React.Component {
  render() {
    return (
      <div>
        <PreviewBlock header="Simple Menu">
        <Menu>
          <span>item1</span>
          <Menu submenu title="submenu">
            <span>sub-item1</span>
            <span>sub-item2</span>
            <Menu submenu title="submenu2">
              <span>sub2-item1</span>
              <span>sub2-item2</span>
            </Menu>
          </Menu>
        </Menu>
        </PreviewBlock>
      </div>
    )
  }
}
`;
