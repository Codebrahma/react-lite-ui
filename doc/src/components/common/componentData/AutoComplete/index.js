export const componentData = {
  htmlStructure: `
    <div class="autocomplete">
      <input class="autocomplete-input" type="text">
      <div id="autocomplete-list" class="autocomplete-list">
          <div aria-label="inactive" class="autocomplete-list-item">
            lorem
          </div>
          <div aria-label="inactive" class="autocomplete-list-item">
            ipsum
          </div>
      </div>
    </div>
  `,
  propsData: [
    {
      prop: 'data',
      type: 'Array',
      defaultValue: '',
      description: 'An array of options for autocompletion. ( Required )',
    },
    {
      prop: 'placeholder',
      type: 'String',
      defaultValue: 'undefined',
      description: 'Set a placeholder for the input component.',
    },
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Set a class to style the Component',
    },
    {
      prop: 'onChange',
      type: 'Function',
      defaultValue: '',
      description: 'An input change listener which returns the input value on any changes.',
    },
    {
      prop: 'onKeyPress',
      type: 'Function',
      defaultValue: '',
      description: 'A keypress listener on the input field.',
    },
    {
      prop: 'labelKey',
      type: 'String',
      defaultValue: 'label',
      description: 'A string representing the key for item\'s label.',
    },
    {
      prop: 'valueKey',
      type: 'String',
      defaultValue: 'value',
      description: 'A string representing the key for item\'s value.',
    },
  ],  
  themesData: [
    {
      name: 'autocomplete',
      description: 'Class used for the autocomplete element.',
    },
    {
      name: 'autocomplete-input',
      description: 'Class used for the text input element.',
    },
    {
      name: 'autocomplete-list',
      description: '	Class used for the autocomplete list.',
    },
    {
      name: 'autocomplete-list-item',
      description: '	Class used for the autocomplete list options.',
    },
    {
      name: 'border-animation',
      description: 'Class used for animating of input component when focused.',
    },
  ],
  basicComponent: `
    class Demo extends React.Component {
      render() {
          const data = [
              { label: 'lorem' },
              { label: 'ipsum' }
          ];
        return (
          <AutoComplete data={data} theme={componentTheme} />
        )
      }
    }
  `,
};