import Card from '../../../../src/Card';
import CardReadme from '../../../../src/card/readMe.md';

const CardDefaultCode =   `
class Demo extends React.Component {
  render() {
    return (
      <Card
        header='Card String header'
        wrapContent
        noPadding
        theme={customTheme}>
        <span>Card Content</span>
        <span>Card Content</span>
        <span>Card Content</span>
      </Card>
    )
  }
}

return <Demo />;
`;

export const componentList = [
  {
    name: 'card',
    doc: CardReadme,
    component: Card,
    defaultCode: CardDefaultCode,
  },  
];
