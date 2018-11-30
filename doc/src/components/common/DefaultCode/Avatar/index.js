export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Avatar>C</Avatar>;
    }
  }
  `,
  propsData: [
    {
      prop: 'children',
      type: 'String',
      defaultValue: 'null',
      description: '	Children as a string to render an avatar with alphabet',
    },
    {
      prop: 'alphabet',
      type: 'String',
      defaultValue: '',
      description: 'Prop to render avatar with alphabet',
    },
    {
      prop: 'image',
      type: 'String',
      defaultValue: 'null',
      description: '	Prop to render avatar with image',
    },
    {
      prop: 'alt',
      type: 'String',
      defaultValue: '',
      description: 'Alternate text for image',
    },
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Set a class to style the component',
    },
    {
      prop: 'bgColor',
      type: 'String',
      defaultValue: 'darkGrey',
      description: 'Set a class to apply background color to the component. Possible vales are darkBlue, lightBlue, green, orange, lightRed, white, grey and darkGrey',
    },
  ],  
  themesData: [
    {
      name: 'avatar',
      description: 'Class used for the root element.',
    },
    {
      name: 'avatarComtent',
      description: 'Class used for the child element.',
    },
  ],
  basicComponent: `
    <Avatar>C</Avatar>
  `,
};