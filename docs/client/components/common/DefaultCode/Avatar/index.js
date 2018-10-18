export const defaultCode = `
class Demo extends React.Component {
  render() {
    const MenuIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" id="Layer_1"  version="1.1" viewBox="0 0 32 32" width="20px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
    );
    return (
      <div>
        <PreviewBlock header="Simple Avatar with Image">
          <Avatar image="https://placeimg.com/80/80/animals"/>
        </PreviewBlock>
        <PreviewBlock header="Avatar with Alphabets and background colors">
          <PreviewElements>
            <Avatar bgColor="orange">R</Avatar>
            <Avatar theme={theme}>E</Avatar>
            <Avatar alphabet='A' bgColor="grey"/>
            <Avatar bgColor="lightBlue">C</Avatar>
            <Avatar alphabet='T' />
          </PreviewElements>
        </PreviewBlock>
        <PreviewBlock header="Avatar with Icon">
          <Avatar bgColor="darkBlue"><MenuIcon /></Avatar>
        </PreviewBlock>
      </div>
    )
  }
}
`;
