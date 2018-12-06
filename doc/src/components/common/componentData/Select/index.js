export const componentData = {
  htmlStructure: `
    <div class="select">
      <div id="select" class="selectInput border-animation" tabindex="0">
        <div class="selected">
          <input
            type="text"
            value="Lorem"
            disabled
          />
        </div>
        <div class="arrow up" />
      </div>
      <!-- Conditionally rendered -->
      <div id="select-dropdown" class="menu show">
        <span class="option option-hover">
          <span>Lorem</span>
        </span>
        <span class="option">
          <span>Ipsum</span>
        </span>
        <span class="option">
          <span>Dolor</span>
        </span>
      </div>
    </div>
  `,
  propsData: [
    {
      prop: 'data',
      type: 'Array',
      defaultValue: '',
      description: 'An array of options for options. ( Required )',
    },
    {
      prop: 'onSelect',
      type: 'Function',
      defaultValue: '',
      description: 'A change listener which returns the selected value on any changes. ( Optional )',
    },
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Set a class to style the Component',
    },
    {
      prop: 'defaultValue',
      type: 'object',
      defaultValue: `{ label: '' }`,
      description: 'Set a default value for the Component',
    },
  ],  
  themesData: [
    {
      name: 'select',
      description: 'Class used for wrapper component.',
    },
    {
      name: 'menu',
      description: 'Class used for dropdown menu.',
    },
    {
      name: 'option',
      description: 'Class used for dropdown menu items.',
    },
    {
      name: 'option-hover',
      description: 'Class used for item on which mouse is hovering.',
    },
    {
      name: 'selectInput',
      description: '	Class used for input box',
    },
    {
      name: 'selected',
      description: 'Class used for highlighting selected option.',
    },
    {
      name: 'arrow',
      description: 'Class used for arrow icon.',
    },
    {
      name: 'up, down',
      description: 'Class used for arrow icon states.',
    },
  ],
  basicComponent: `
    class Demo extends React.Component {
      render() {
        const options = [
          { label: 'Lorem' }, 
          { label: 'Ipsum'}, 
          { label: 'Dolor' }
        ];
        return (
          <div>
            <Select
              options={options}
              theme={componentTheme}
            />
          </div>
        )
      }
    }
  `,
};