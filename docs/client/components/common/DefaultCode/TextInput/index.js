export const defaultCode = `
class Demo extends React.Component {
   render() {
    return (
      <div>
        {/* Preview Block 1 */}
        <PreviewBlock header="Default TextInput">
          <TextInput />
        </PreviewBlock>
        {/* Preview Block 2 */}
        <PreviewBlock header="Disabled TextInput">
          <TextInput disabled={true}/>
        </PreviewBlock>
        {/* Preview Block 3 */}
        <PreviewBlock header="Controlled width TextInput">
          <TextInput width='300px' placeholder="type here..."/>
        </PreviewBlock>
        <PreviewBlock header="Password TextInput">
          <TextInput type="password" placeholder="Enter password..."/>          
        </PreviewBlock>
      </div>
    )
  }
}
`;
