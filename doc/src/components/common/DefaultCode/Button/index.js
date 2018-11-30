export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Button>C</Button>;
    }
  }
  `,
  propsData: [
    {
      prop: 'children',
      type: 'Any',
      defaultValue: 'Button',
      description: 'All children components to be rendered inside the button',
    },
    {
      prop: 'type',
      type: 'String',
      defaultValue: 'primary',
      description: 'Represents the style to be applied for the button. Possible values are primary, secondary, success, danger, warning, info, and dark',
    },
    {
      prop: 'size',
      type: 'String',
      defaultValue: 'medium',
      description: 'Defines the size of the button. Possible values are small, medium, and large',
    },
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Set a class to style the Component',
    },
    {
      prop: 'href',
      type: 'String',
      defaultValue: 'null',
      description: 'Creates a link for the button.',
    },
    {
      prop: 'icon',
      type: 'String / Element',
      defaultValue: 'null',
      description: 'Value of the icon',
    },
    {
      prop: 'iconAlignment',
      type: 'String',
      defaultValue: 'left',
      description: 'Set an alignment of the icon. Possible values are left, right',
    },
    {
      prop: 'iconButton',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop to be sent for rendering icon only type button',
    },
    {
      prop: 'onClick',
      type: 'Function',
      defaultValue: '',
      description: 'Callback to be called when the button is clicked',
    },
    {
      prop: 'disabled',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop to disable the button',
    },
    {
      prop: 'bordered',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop to render bordered button',
    },
    {
      prop: 'borderless',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop to render borderless button',
    },
    {
      prop: 'flat',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop to render flat button',
    },
  ],  
  themesData: [
    {
      name: 'button',
      description: 'Class used for the root element.',
    },
    {
      name: '${type}',
      description: 'Class used for styling type (primary, secondary, success, danger, warning, info, dark) buttons',
    },
    {
      name: '${type}Bordered',
      description: 'Class used for styling bordered buttons of specific type',
    },
    {
      name: '${size}',
      description: 'Class used for styling ( small, medium, large) sized buttons',
    },
    {
      name: 'iconButtonWrapper',
      description: 'Class used for styling root element of icon only buttons',
    },
    {
      name: 'iconButton',
      description: 'Class used for styling icon only buttons',
    },
  ],
  basicComponent: `
    <Button>Primary</Button>
  `
};