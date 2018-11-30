export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Navbar>C</Navbar>;
    }
  }
  `,
  propsData: [
    {
      prop: 'children',
      type: 'Any',
      defaultValue: 'Navbar',
      description: 'All children components to be rendered inside the navbar',
    },
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Set a class to style the component',
    },
    {
      prop: 'position',
      type: 'String',
      defaultValue: 'static',
      description: 'Prop to define position of the navbar. Possible values are static, sticky, fixed, absolute and relative',
    },
    {
      prop: 'flat',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop to define presence of box-shadow to the navbar.',
    },
    {
      prop: 'color',
      type: 'String',
      defaultValue: 'default',
      description: 'Prop to define color of the navbar.',
    },
    {
      prop: 'title',
      type: 'String / Element',
      defaultValue: 'navbar',
      description: 'Prop to render logo or logo text of the navbar.',
    },
    {
      prop: 'leftIcon',
      type: 'Element',
      defaultValue: 'null',
      description: 'Prop to render icon on very left of the navbar.',
    },
    {
      prop: 'rightIcon',
      type: 'Element',
      defaultValue: 'null',
      description: 'Prop to render icon on very right of the navbar.',
    },
    {
      prop: 'onLeftIconClick',
      type: 'Function',
      defaultValue: '',
      description: 'Callback to be called when leftIcon is clicked.',
    },
    {
      prop: 'onRightIconClick',
      type: 'Function',
      defaultValue: '',
      description: 'Callback to be called when rightIcon is clicked.',
    },
  ],  
  themesData: [
    {
      name: 'navbarWrapper',
      description: 'Class used for the root element.',
    },
    {
      name: 'innerWrapper',
      description: 'Class used for the navbar content wrapping element.',
    },
    {
      name: 'leftContent',
      description: 'Class used for the left side content wrappng element(leftIcon and title).',
    },
    {
      name: 'rightContent',
      description: 'Class used for the right side content wrapping element(children and rightIcon).',
    },
    {
      name: 'leftIcon',
      description: 'Class used for the leftIcon element.',
    },
    {
      name: 'rightIcon',
      description: 'Class used for the rightIcon element.',
    },
    {
      name: 'title',
      description: 'Class used for the title when passed a string.',
    },
    {
      name: 'defaultColor',
      description: 'Class used for styling navbar color.',
    },
    {
      name: '${position}Position',
      description: 'Class used for the (static, sticky, fixed, absolute, relative) positioned navbar.',
    },
  ],
  basicComponent: `
    <Navbar title="logo" />
  `,
};