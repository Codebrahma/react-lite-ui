export const defaultCode = `
class Demo extends React.Component {
  render() {
    return (
      <div>
        <PreviewBlock header="Simple Avatar">
          <Avatar image="https://placeimg.com/80/80/animals"/>
        </PreviewBlock>
        <PreviewBlock header="Avatar with Title">
          <Avatar>P</Avatar>
          <Avatar theme={theme}>G</Avatar>
        </PreviewBlock>
      </div>
    )
  }
}
`;
