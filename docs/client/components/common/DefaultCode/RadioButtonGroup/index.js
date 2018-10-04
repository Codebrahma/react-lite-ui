export const defaultCode = `
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.handleRadioButtonClick = this.handleRadioButtonClick.bind(this);
  }
  
  handleRadioButtonClick ({label,value}) {
    alert('Clicked on, label: ' + label + ', value: ' + value);
  };

  render() {
    const options = [
      { label: 'Alpha', value: 'Value-alpha' }, 
      { label: 'Beta', value: 'Value-beta'}, 
      { label: 'Zheta', value: 'Value-zheta' }
    ];
    return (
      <div>
        {/* Preview Block 1 */}
        <PreviewBlock header="Default RadioButton group">
          <RadioButtonGroup
            options={options}
            onClick={this.handleRadioButtonClick}
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
