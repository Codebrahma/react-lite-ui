export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Badge>C</Badge>;
    }
  }
  `,
  propsData: [
    {
      prop: 'children',
      type: 'Any',
      defaultValue: 'null',
      description: 'A child component to apply badge. ( Required )',
    },
    {
      prop: 'badgeCount',
      type: 'Number',
      defaultValue: '0',
      description: 'Counter value to be displayed on badge',
    },
    {
      prop: 'size',
      type: 'String',
      defaultValue: '',
      description: 'Change the size of the badge component. Possible values are - \'small\', \'medium\' and \'large\'',
    },
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Set a class to style the Component.',
    },
  ],  
  themesData: [
    {
      name: 'badge-container',
      description: 'Class used for the wrapper element.',
    },
    {
      name: 'badge-container-${size}',
      description: 'Class used for the size (small, medium, large) of the wrapper element.',
    },
    {
      name: 'badge',
      description: 'Class used for the badge element.',
    },
    {
      name: '${size}',
      description: '	Class used for the size (small, medium, large) of the badge element.',
    },
  ],
  basicComponent: `
    <Badge>
      <Button type="primary">Default</Button>
    </Badge>
  `,
};