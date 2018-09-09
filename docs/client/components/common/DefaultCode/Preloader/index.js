export const defaultCode =   `
class Demo extends React.Component {
  render() {
    return (
      <div>
        { /* Preview Block-1 */ }
        <PreviewBlock header="Default Preloader (size, color)">
          <PreviewElements>
            <span>
              small, danger
              <Preloader
                size='small'
                color='danger'  
              />
            </span>
            <span>
              medium, primary
              <Preloader />
            </span>
            <span>
              large, dark
              <Preloader
                size='large'
                color='dark'
              />
            </span>
          </PreviewElements>
        </PreviewBlock>
        { /* Preview Block-2 */ }
        <PreviewBlock header="Preloader with dots (size, color)">
          <PreviewElements>
            <span>
              small, warning
              <Preloader
                loader='dotsLoader'
                size='small'
                color='warning'
              />
            </span>
            <span>
              medium
              <Preloader
                loader='dotsLoader'
              />
            </span>
            <span>
              large, primary
              <Preloader 
                loader='dotsLoader'            
                size='large'
                color='primary'
              />
            </span>
          </PreviewElements>
        </PreviewBlock>
        { /* Preview Block-3 */ }
        <PreviewBlock header="Preloader with fade-away effect (size, color)">
          <PreviewElements>
          <span>
            small, success
              <Preloader
                loader='fadeAwayLoader'
                size='small'
                color='success'
              />
            </span>
            <span>
              medium
              <Preloader
                loader='fadeAwayLoader'
              />
            </span>
            <span>
              large, info
              <Preloader 
                loader='fadeAwayLoader'            
                size='large'
                color='info'
              />
            </span>
          </PreviewElements>
        </PreviewBlock>
        { /* Preview Block-4 */ }
        <PreviewBlock header="Preloader with color circle (size, color)">
          <PreviewElements>
          <span>
            small, secondary
              <Preloader
                loader='colorCircleLoader'
                size='small'
                color='secondary'
              />
            </span>
            <span>
              medium
              <Preloader
                loader='colorCircleLoader'
              />
            </span>
            <span>
              large, danger
              <Preloader
                loader='colorCircleLoader'
                size='large'
                color='danger'
              />
            </span>
          </PreviewElements>
        </PreviewBlock>
      </div>
    )
  }
}
`;