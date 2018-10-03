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
    <Chip />
    <Chip
      label='small clickable'
      color='warning'
      size='small'
      handleChipClick={() => alert('Clicked on Chip')}
      handleDelete={() => alert('Clicked Delete Button')}
    />
    <Chip
      avatar='https://unsplash.it/50x50'
      label='primary chip'
      color='primary'
    />
    <Chip
      label='large deletable'
      color='info'
      size='large'
      handleDelete={() => alert('Clicked Delete Button')}
    />
    <Chip outlined />
    <Chip
      label='small success'
      color='success'
      size='small'
      outlined
    />
    <Chip
      label='danger deletable'
      color='danger'
      handleDelete={() => alert('Clicked Delete Button')}
      outlined
    />
    <Chip
      avatar='https://unsplash.it/50x50'
      label='large avatar chip'
      color='info'
      size='large'
      outlined
    />
    <Chip
      avatar={<Avatar>K</Avatar>}
      label='avatar click and delete'
      color='secondary'
      size='medium'
      handleDelete={() => alert('Clicked Delete Button')}
      handleChipClick={() => alert('clicked on chip')}
      outlined
    />
  </div>,
  document.getElementById('index'),
);
