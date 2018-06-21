import { themr } from 'react-css-themr';
import { buttonFactory } from './Button';
import { browseButtonFactory } from './BrowseButton';
import { iconButtonFactory } from './IconButton';
import { FontIcon } from '../font_icon/FontIcon';
import themedRippleFactory from '../ripple';
import theme from './theme.scss';

const Button = buttonFactory(themedRippleFactory({ centered: false }), FontIcon);
const IconButton = iconButtonFactory(themedRippleFactory({ centered: true }), FontIcon);
const BrowseButton = browseButtonFactory(themedRippleFactory({ centered: false }), FontIcon);
const ThemedButton = themr('CBBUTTON', theme)(Button);
const ThemedIconButton = themr('CBBUTTON', theme)(IconButton);
const ThemedBrowseButton = themr('CBBUTTON', theme)(BrowseButton);

export default ThemedButton;
export { ThemedButton as Button };
export { ThemedIconButton as IconButton };
export { ThemedBrowseButton as BrowseButton };
