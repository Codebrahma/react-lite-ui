import Card from '../../../../src/card';
import CardReadme from '../../../../src/card/readMe.md';
import Button from '../../../../src/button';
import ButtonReadme from '../../../../src/button/readMe.md';
import Checkbox from '../../../../src/checkbox';
import CheckboxReadme from '../../../../src/checkbox/readMe.md';
import CheckboxGroup from '../../../../src/checkbox';
import CheckboxGroupReadme from '../../../../src/checkbox/readMe.md';
import Toggle from '../../../../src/toggle';
import ToggleReadme from '../../../../src/toggle/readMe.md';
import RadioButtonGroup from '../../../../src/radioButtonGroup';
import TextInput from '../../../../src/textInput';
import TextInputReadme from '../../../../src/textInput/readMe.md';
import Snackbar from '../../../../src/snackbar';
import SnackbarReadme from '../../../../src/snackbar/readMe.md';
import Avatar from '../../../../src/avatar';
import AvatarReadme from '../../../../src/avatar/readMe.md';
import Tooltip from '../../../../src/avatar';
import AutoComplete from '../../../../src/autocomplete';
import AutocompleteReadme from '../../../../src/autocomplete/readMe.md';
import BadgeReadme from '../../../../src/badge/readMe.md';
import Badge from '../../../../src/badge';

import {
  CardDefaultCode,
  ButtonDefaultCode,
  CheckboxDefaultCode,
  CheckboxGroupDefaultCode,
  ToggleDefaultCode,
  RadioButtonGroupDefaultCode,
  TextInputDefaultCode,
  SnackbarDefaultCode,
  AvatarDefaultCode,
  TooltipDefaultCode,
  AutoCompleteDefaultCode,
  BadgeDefaultCode,
} from './DefaultCode';

export const componentList = [
  {
    name: 'Autocomplete',
    docs: AutocompleteReadme,
    component: AutoComplete,
    defaultCode: AutoCompleteDefaultCode
  },
  {
    name: 'Badge',
    docs: BadgeReadme,
    component: Badge,
    defaultCode: BadgeDefaultCode,
  },
  {
    name: 'Card',
    docs: CardReadme,
    component: Card,
    defaultCode: CardDefaultCode,
  },
  {
    name: 'Button',
    docs: ButtonReadme,
    component: Button,
    defaultCode: ButtonDefaultCode,
  },
  {
    name: 'Checkbox',
    docs: CheckboxReadme,
    component: Checkbox,
    defaultCode: CheckboxDefaultCode,
  },
  {
    name: 'CheckboxGroup',
    docs: CheckboxGroupReadme,
    component: CheckboxGroup,
    defaultCode: CheckboxGroupDefaultCode,
  },
  {
    name: 'Toggle',
    docs: CheckboxGroupReadme,
    component: Toggle,
    defaultCode: ToggleDefaultCode,
  },
  {
    name: 'RadioButtonGroup',
    docs: CheckboxGroupReadme,
    component: RadioButtonGroup,
    defaultCode: RadioButtonGroupDefaultCode,
  },
  {
    name: 'TextInput',
    docs: TextInputReadme,
    component: TextInput,
    defaultCode: TextInputDefaultCode,
  },
  {
    name: 'Snackbar',
    docs: SnackbarReadme,
    component: Snackbar,
    defaultCode: SnackbarDefaultCode,
  },
  {
    name: 'Avatar',
    docs: AvatarReadme,
    component: Avatar,
    defaultCode: AvatarDefaultCode,
  },
  {
    name: 'Tooltip',
    docs: AvatarReadme,
    component: Tooltip,
    defaultCode: TooltipDefaultCode,
  }
];
