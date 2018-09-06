export const defaultCode =   `
class Demo extends React.Component {
  render() {
    return (
      <div>
        { /* Preview Block-1 */ }
        <PreviewBlock header="Default Preloader">
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <Preloader size='small'/>
            <Preloader />
            <Preloader size='large' />
          </div>
        </PreviewBlock>
        { /* Preview Block-2 */ }
        <PreviewBlock header="Preloader with dots">
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <Preloader
              loader='dotsLoader'
              size='small'
            />
            <Preloader
              loader='dotsLoader'
            />
            <Preloader 
              loader='dotsLoader'            
              size='large'
            />
          </div>
        </PreviewBlock>
        { /* Preview Block-3 */ }
        <PreviewBlock header="Preloader with fade-away effect">
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <Preloader
              loader='fadeAwayLoader'
              size='small'
            />
            <Preloader
              loader='fadeAwayLoader'
            />
            <Preloader 
              loader='fadeAwayLoader'            
              size='large'
            />
          </div>
        </PreviewBlock>
        { /* Preview Block-4 */ }
        <PreviewBlock header="Preloader with color circle">
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <Preloader
              loader='colorCircleLoader'
              size='small'
            />
            <Preloader
              loader='colorCircleLoader'
            />
            <Preloader
              loader='colorCircleLoader'
              size='large'
            />
          </div>
        </PreviewBlock>
      </div>
    )
  }
}
`;