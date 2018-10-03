```
import { Card } from 'react-lite-ui';
import theme from './theme.scss';

const App = (
  <Card
    header='Card String header'
    wrapContent
    noPadding
    theme={customTheme}>
    <span>Card Content</span>
    <span>Card Content</span>
    <span>Card Content</span>
  </Card>
);

export default App;

// In theme.scss Customize any themeable option and pass it as a prop
:local(.card) {
  background: #d2d2d2;
}
```
