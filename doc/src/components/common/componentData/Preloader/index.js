export const componentData = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Preloader>C</Preloader>;
    }
  }
  `,
  propsData: [
    {
      prop: 'loader',
      type: 'String',
      defaultValue: 'circlesLoader',
      description: 'Defines the type 0f preloader to be rendered. Possible loaders are dotsLoader, fadeAwayLoader, linesLoader and colorCircleLoader',
    },
    {
      prop: 'color',
      type: 'String',
      defaultValue: 'default',
      description: 'Represents the style to be applied for the button. Possible values are primary, secondary, success, danger, warning, info, light, and dark',
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
  ],  
  themesData: [
    {
      name: 'loaderWrapper',
      description: 'Class used for the root element.',
    },
    {
      name: '${loader}',
      description: 'Class used for the loaders (circlesLoader, dotsLoader, fadeAwayLoader, linesLoader, colorCircleLoader).',
    },
    {
      name: '${color}',
      description: 'Class used for styling (primary, secondary, success, danger, warning, info, light, dark) colored loaders',
    },
    {
      name: '${size}',
      description: 'Class used for styling (small, medium, large) sized loaders',
    },
  ],
  basicComponent: `
    <Preloader />
  `,
};