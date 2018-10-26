import Card from '../../../../src/card';
import CardReadme from '../../../../src/card/readMe.md';
import Button from '../../../../src/button';
import ButtonReadme from '../../../../src/button/readMe.md';
import Checkbox from '../../../../src/checkbox';
import CheckboxReadme from '../../../../src/checkbox/readMe.md';
import CheckboxGroup from '../../../../src/checkbox';
import CheckboxGroupReadme from '../../../../src/checkboxGroup/readMe.md';
import Toggle from '../../../../src/toggle';
import ToggleReadme from '../../../../src/toggle/readMe.md';
import RadioButtonGroup from '../../../../src/radioButtonGroup';
import RadioButtonGroupReadme from '../../../../src/radioButtonGroup/readMe.md';
import TextInput from '../../../../src/textInput';
import TextInputReadme from '../../../../src/textInput/readMe.md';
import Snackbar from '../../../../src/snackbar';
import SnackbarReadme from '../../../../src/snackbar/readMe.md';
import Avatar from '../../../../src/avatar';
import AvatarReadme from '../../../../src/avatar/readMe.md';
import Tooltip from '../../../../src/tooltip';
import TooltipReadme from '../../../../src/tooltip/readMe.md';
import AutoComplete from '../../../../src/autocomplete';
import AutocompleteReadme from '../../../../src/autocomplete/readMe.md';
import BadgeReadme from '../../../../src/badge/readMe.md';
import Badge from '../../../../src/badge';
import Drawer from '../../../../src/drawer';
import DrawerReadme from '../../../../src/drawer/readMe.md';
import ChipReadMe from '../../../../src/chip/readMe.md';
import Chip from '../../../../src/chip';
import Menu from "../../../../src/menu";
import MenuReadme from '../../../../src/menu/readMe.md';
import Modal from '../../../../src/modal';
import ModalReadMe from '../../../../src/modal/readMe.md';
import MultiSelectReadMe from '../../../../src/multiselect/readMe.md';
import MultiSelect from "../../../../src/multiselect";
import NavbarReadMe from '../../../../src/navbar/readMe.md';
import Navbar from '../../../../src/navbar';
import PopoverReadme from '../../../../src/popover/readMe.md';
import Popover from '../../../../src/popover';
import PreloaderReadme from '../../../../src/preloader/readMe.md';
import Preloader from '../../../../src/preloader';
import Select from '../../../../src/select';
import SelectReadme from '../../../../src/select/readMe.md';
import Slider from '../../../../src/slider';
import SliderReadMe from '../../../../src/slider/readMe.md';
import Carousel from '../../../../src/carousel';
import CarouselReadme from '../../../../src/carousel/readMe.md';
import ProgressBar from '../../../../src/progressbar';
import ProgressBarReadme from '../../../../src/progressbar/readMe.md';

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
  DrawerDefaultCode,
  ChipDefaultCode,
  MenuDefaultCode,
  ModalDefaultCode,
  MultiSelectDefaultCode,
  NavbarDefaultCode,
  PopoverDefaultCode,
  PreloaderDefaultCode,
  SelectDefaultCode,
  SliderDefaultCode,
  CarouselDefaultCode,
  ProgressBarDefaultCode,
} from './DefaultCode';

export const componentList = [
  {
    name: 'Autocomplete',
    docs: AutocompleteReadme,
    component: AutoComplete,
    defaultCode: AutoCompleteDefaultCode
  },
  {
    name: 'Avatar',
    docs: AvatarReadme,
    component: Avatar,
    defaultCode: AvatarDefaultCode,
  },
  {
    name: 'Badge',
    docs: BadgeReadme,
    component: Badge,
    defaultCode: BadgeDefaultCode,
  },
  {
    name: 'Button',
    docs: ButtonReadme,
    component: Button,
    defaultCode: ButtonDefaultCode,
  },
  {
    name: 'Card',
    docs: CardReadme,
    component: Card,
    defaultCode: CardDefaultCode,
  },
  {
    name: 'Carousel',
    docs: CarouselReadme,
    component: Carousel,
    defaultCode: CarouselDefaultCode,
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
    name: 'Chip',
    docs: ChipReadMe,
    component: Chip,
    defaultCode: ChipDefaultCode,
  },
  {
    name: 'Drawer',
    docs: DrawerReadme,
    component: Drawer,
    defaultCode: DrawerDefaultCode,
  },
  {
    name: 'Menu',
    docs: MenuReadme,
    component: Menu,
    defaultCode: MenuDefaultCode,
  },
  {
    name: 'Modal',
    docs: ModalReadMe,
    component: Modal,
    defaultCode: ModalDefaultCode,
  },
  {
    name: 'MultiSelect',
    docs: MultiSelectReadMe,
    component: MultiSelect,
    defaultCode: MultiSelectDefaultCode,
  },
  {
    name: 'Navbar',
    docs: NavbarReadMe,
    component: Navbar,
    defaultCode: NavbarDefaultCode,
  },
  {
    name: 'Popover',
    docs: PopoverReadme,
    component: Popover,
    defaultCode: PopoverDefaultCode,
  },
  {
    name: 'Preloader',
    docs: PreloaderReadme,
    component: Preloader,
    defaultCode: PreloaderDefaultCode,
  },
  {
    name: 'ProgressBar',
    docs: ProgressBarReadme,
    component: ProgressBar,
    defaultCode: ProgressBarDefaultCode,
  },
  {
    name: 'RadioButtonGroup',
    docs: RadioButtonGroupReadme,
    component: RadioButtonGroup,
    defaultCode: RadioButtonGroupDefaultCode,
  },
  {
    name: 'Select',
    docs: SelectReadme,
    component: Select,
    defaultCode: SelectDefaultCode,
  },
  {
    name: 'Slider',
    docs: SliderReadMe,
    component: Slider,
    defaultCode: SliderDefaultCode,
  },
  {
    name: 'Snackbar',
    docs: SnackbarReadme,
    component: Snackbar,
    defaultCode: SnackbarDefaultCode,
  },
  {
    name: 'TextInput',
    docs: TextInputReadme,
    component: TextInput,
    defaultCode: TextInputDefaultCode,
  },
  {
    name: 'Toggle',
    docs: ToggleReadme,
    component: Toggle,
    defaultCode: ToggleDefaultCode,
  },
  {
    name: 'Tooltip',
    docs: TooltipReadme,
    component: Tooltip,
    defaultCode: TooltipDefaultCode,
  }
];
