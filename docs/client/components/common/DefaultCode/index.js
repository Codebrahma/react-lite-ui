export const CardDefaultCode =   `
class Demo extends React.Component {
  render() {
    return (
      <Card
        header='Card String header'
        wrapContent
        noPadding
        theme={customTheme}>
        <div>Card Content</div>
        <div>Card Content</div>
        <div>Card Content</div>
      </Card>
    )
  }
}

return <Demo />;
`;
