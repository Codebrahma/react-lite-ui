
export const defaultCode = `
class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* Preview Block 1 */}
        <PreviewBlock header="Default Tooltip">
          <Tooltip tooltipText='Normal Tooltip'>Look down</Tooltip>
        </PreviewBlock>
        {/* Preview Block 2 */}
        <PreviewBlock header="Tooltip at top">
          <Tooltip tooltipText='Top Tooltip' top>Look up</Tooltip>
        </PreviewBlock>
      </div>
    )
  }
}
`;
