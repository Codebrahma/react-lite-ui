import { themr } from 'react-css-themr';
import { buttonFactory } from './Button';
import { FontIcon } from '../font_icon/FontIcon';
import themedRippleFactory from '../ripple';
import theme from './theme.scss';

const Button = buttonFactory(themedRippleFactory({ centered: false }), FontIcon);
const ThemedButton = themr('CBBUTTON', theme)(Button);

export default ThemedButton;
export { ThemedButton as Button };
