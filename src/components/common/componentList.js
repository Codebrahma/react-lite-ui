import Card from '../../../../lib/card';
import Button from '../../../../lib/button';
import Checkbox from '../../../../lib/checkbox';
import CheckboxGroup from '../../../../lib/checkboxGroup';
import Toggle from '../../../../lib/toggle';
import RadioButtonGroup from '../../../../lib/radioButtonGroup';
import TextInput from '../../../../lib/textInput';
import Snackbar from '../../../../lib/snackbar';
import Avatar from '../../../../lib/avatar';
import Tooltip from '../../../../lib/tooltip';
import AutoComplete from '../../../../lib/autocomplete';
import Badge from '../../../../lib/badge';
import Drawer from '../../../../lib/drawer';
import Chip from '../../../../lib/chip';
import Menu from '../../../../lib/menu';
import Modal from '../../../../lib/modal';
import MultiSelect from '../../../../lib/multiselect';
import Navbar from '../../../../lib/navbar';
import Popover from '../../../../lib/popover';
import Preloader from '../../../../lib/preloader';
import Select from '../../../../lib/select';
import Slider from '../../../../lib/slider';
import Carousel from '../../../../lib/carousel';
import ProgressBar from '../../../../lib/progressbar';
import Table from '../../../../lib/table';
import Pagination from '../../../../lib/pagination';

import {
  CardComponentData,
  ButtonComponentData,
  CheckboxComponentData,
  CheckboxGroupComponentData,
  ToggleComponentData,
  RadioButtonGroupComponentData,
  TextInputComponentData,
  SnackbarComponentData,
  AvatarComponentData,
  TooltipComponentData,
  AutoCompleteComponentData,
  BadgeComponentData,
  DrawerComponentData,
  ChipComponentData,
  MenuComponentData,
  ModalComponentData,
  MultiSelectComponentData,
  NavbarComponentData,
  PopoverComponentData,
  PreloaderComponentData,
  SelectComponentData,
  SliderComponentData,
  CarouselComponentData,
  ProgressBarComponentData,
  PaginationComponentData,
  TableComponentData,
} from './componentData';

// eslint-disable-next-line import/prefer-default-export
export const componentList = [
  {
    name: 'AutoComplete',
    component: AutoComplete,
    componentData: AutoCompleteComponentData,
  },
  {
    name: 'Avatar',
    component: Avatar,
    componentData: AvatarComponentData,
  },
  {
    name: 'Badge',
    component: Badge,
    componentData: BadgeComponentData,
  },
  {
    name: 'Button',
    component: Button,
    componentData: ButtonComponentData,
  },
  {
    name: 'Card',
    component: Card,
    componentData: CardComponentData,
  },
  {
    name: 'Carousel',
    component: Carousel,
    componentData: CarouselComponentData,
  },
  {
    name: 'Checkbox',
    component: Checkbox,
    componentData: CheckboxComponentData,
  },
  {
    name: 'CheckboxGroup',
    component: CheckboxGroup,
    componentData: CheckboxGroupComponentData,
  },
  {
    name: 'Chip',
    component: Chip,
    componentData: ChipComponentData,
  },
  {
    name: 'Drawer',
    component: Drawer,
    componentData: DrawerComponentData,
  },
  {
    name: 'Menu',
    component: Menu,
    componentData: MenuComponentData,
  },
  {
    name: 'Modal',
    component: Modal,
    componentData: ModalComponentData,
  },
  {
    name: 'MultiSelect',
    component: MultiSelect,
    componentData: MultiSelectComponentData,
  },
  {
    name: 'Navbar',
    component: Navbar,
    componentData: NavbarComponentData,
  },
  {
    name: 'Pagination',
    component: Pagination,
    componentData: PaginationComponentData,
  },
  {
    name: 'Popover',
    component: Popover,
    componentData: PopoverComponentData,
  },
  {
    name: 'Preloader',
    component: Preloader,
    componentData: PreloaderComponentData,
  },
  {
    name: 'ProgressBar',
    component: ProgressBar,
    componentData: ProgressBarComponentData,
  },
  {
    name: 'RadioButtonGroup',
    component: RadioButtonGroup,
    componentData: RadioButtonGroupComponentData,
  },
  {
    name: 'Select',
    component: Select,
    componentData: SelectComponentData,
  },
  {
    name: 'Slider',
    component: Slider,
    componentData: SliderComponentData,
  },
  {
    name: 'Snackbar',
    component: Snackbar,
    componentData: SnackbarComponentData,
  },
  {
    name: 'Table',
    component: Table,
    componentData: TableComponentData,
  },
  {
    name: 'TextInput',
    component: TextInput,
    componentData: TextInputComponentData,
  },
  {
    name: 'Toggle',
    component: Toggle,
    componentData: ToggleComponentData,
  },
  {
    name: 'Tooltip',
    component: Tooltip,
    componentData: TooltipComponentData,
  },
];
