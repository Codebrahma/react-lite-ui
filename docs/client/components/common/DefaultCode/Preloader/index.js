export const defaultCode =   `
class Demo extends React.Component {
  render() {
    return (
      <div>
        { /* Preview Block-1 */ }
        <PreviewBlock header="Default Preloader">
          <Preloader
            theme={theme}
          />
        </PreviewBlock>
        { /* Preview Block-2 */ }
        <PreviewBlock header="Preloader with dots">
          <Preloader
            loader="dots"
            theme={theme}
          />
        </PreviewBlock>
        { /* Preview Block-3 */ }
        <PreviewBlock header="Preloader with fade-away effect">
          <Preloader
            loader="fadeAway"
            theme={theme}
          />
        </PreviewBlock>
        { /* Preview Block-4 */ }
        <PreviewBlock header="Preloader with fade-away effect">
          <Preloader
            loader="colorCircle"
            theme={theme}
          />
        </PreviewBlock>
      </div>
    )
  }
}
`;