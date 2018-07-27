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

import {
  CardDefaultCode,
  ButtonDefaultCode,
  CheckboxDefaultCode,
  CheckboxGroupDefaultCode,
  ToggleDefaultCode,
  RadioButtonGroupDefaultCode,
  TextInputDefaultCode,
  SnackbarDefaultCode,
} from './DefaultCode';

export const componentList = [
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
  }
];
