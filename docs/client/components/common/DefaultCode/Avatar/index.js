export const defaultCode = `
class Demo extends React.Component {
  render() {
    return (
      <div>
        <PreviewBlock header="Simple Avatar">
          <Avatar image="https://placeimg.com/80/80/animals"/>
        </PreviewBlock>
        <PreviewBlock header="Avatar with Alphabets">
          <Avatar>C</Avatar>
          <Avatar theme={theme}>B</Avatar>
          <Avatar alphabet='C' />
        </PreviewBlock>
      </div>
    )
  }
}
`;
