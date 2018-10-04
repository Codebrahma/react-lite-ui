export const defaultCode =   `
class Demo extends React.Component {
  render() {
    return (
      <div>
        <PreviewBlock header="Simple Menu">
        <Menu>
          <span>Option 1</span>
          <Menu submenu title="Submenu 1">
              <span>sub1-Option 1</span>
              <span>sub1-Option 2</span>
            </Menu>
          <Menu submenu title="Submenu 2">
            <span>sub2-Option1</span>
            <span>sub2-Option2</span>
            <Menu submenu title="Nested Submenu 1">
              <span>Option 1</span>
              <span>Option 2</span>
            </Menu>
            <Menu submenu title="Nested Submenu 2">
              <span>Option 1</span>
              <span>Option 2</span>
            </Menu>
          </Menu>
          <span>Option 2</span>
          <span>Option 3</span>
        </Menu>
        </PreviewBlock>
      </div>
    )
  }
}
`;
