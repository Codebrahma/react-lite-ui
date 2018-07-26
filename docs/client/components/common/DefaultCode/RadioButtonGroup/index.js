export const defaultCode =   `
class Demo extends React.Component {
  render() {
    const options = [
      { label: 'Alpha' }, 
      { label: 'Beta'}, 
      { label: 'Zheta' }
    ];
    return (
      <div>
        {/* Preview Block 1 */}
        <PreviewBlock header="Default RadioButton group">
          <RadioButtonGroup
            options={options}
          />
        </PreviewBlock>
        {/* Preview Block 2 */}
        <PreviewBlock header="Inline RadioButton group">
          <RadioButtonGroup
            inline
            options={options}
          />
        </PreviewBlock>
      </div>
    )
  }
}
`;
