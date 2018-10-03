import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button';
import Card from './card';
import Checkbox from './checkbox';
import CheckboxGroup from './checkboxGroup';
import Toggle from './toggle';
import RadioButtonGroup from './radioButtonGroup';
import TextInput from './textInput';
import Snackbar from './snackbar';
import Avatar from './avatar';
import Tooltip from './tooltip';
import AutoComplete from './autocomplete';
import Badge from './badge';
import Drawer from './drawer';
import List from './list';
import ListItem from './listitem';
import Chip from './chip';
import Menu from './menu';
import Modal from './modal';
import MultiSelect from './multiselect';
import Navbar from './navbar';
import Preloader from './preloader';
import Select from './select';


export default {
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  RadioButtonGroup,
  Toggle,
  TextInput,
  Snackbar,
  Avatar,
  Tooltip,
  AutoComplete,
  Badge,
  Drawer,
  List,
  ListItem,
  Chip,
  Menu,
  Modal,
  MultiSelect,
  Navbar,
  Preloader,
  Select,
};

ReactDOM.render(
  <div>
    <Card
      header='Card String header'
      wrapContent
      >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Card>
  </div>,
  document.getElementById('index'),
);
