export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Chip>C</Chip>;
    }
  }
  `,
  propsData: [
    {
      prop: 'color',
      type: 'String',
      defaultValue: 'secondary',
      description: 'Represents the style to be applied for the chip. Possible values are primary, secondary, success, danger, warning, info, light, and dark',
    },
    {
      prop: 'size',
      type: 'String',
      defaultValue: 'medium',
      description: 'Defines the size of the chip. Possible values are small, medium, and large',
    },
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Set a class to style the Component',
    },
    {
      prop: 'avatar',
      type: 'String / Element',
      defaultValue: 'null',
      description: 'Value of the icon',
    },
    {
      prop: 'handleChipClick',
      type: 'Function',
      defaultValue: 'null',
      description: 'Callback to be called when the chip is clicked',
    },
    {
      prop: 'handleDelete',
      type: 'Function',
      defaultValue: 'null',
      description: 'Callback to be called when the deleteIcon is clicked',
    },
  ],  
  themesData: [
    {
      name: 'chip',
      description: 'Class used for the root element.',
    },
    {
      name: '${color}',
      description: 'Class used for styling (primary, secondary, success, danger, warning, info, light, dark) colored chips',
    },
    {
      name: '${size}',
      description: 'Class used for styling (small, medium, large) sized chips',
    },
    {
      name: 'label',
      description: 'Class used for styling label element',
    },
    {
      name: 'avatar',
      description: 'Class used for styling avatar element',
    },
    {
      name: 'deleteIcon',
      description: 'Class used for styling deleteIcon element.',
    },
  ],
  basicComponent: `
    <Chip />
  `
};