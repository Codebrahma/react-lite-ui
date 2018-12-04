export const componentData = {
  htmlStructure: `
    <div class="inputWrapper">
      <div class="innerWrapper" style="width: 200px;">
        <input class="inputElement" />
        <span class="input-focus"></span>
      </div>
    </div>
  `,
  propsData: [
    {
      prop: 'width',
      type: 'String',
      defaultValue: 'null',
      description: 'Cutsom width to be set to the input component',
    },
    {
      prop: 'additionalClass',
      type: 'String',
      defaultValue: '',
      description: 'Set a class to style the Component',
    },
  ],  
  themesData: [
    {
      name: 'inputWrapper',
      description: 'Class used for the root wrapper element.',
    },
    {
      name: 'inputElement',
      description: 'Class used for the input element.',
    },
  ],
  basicComponent: `
    <TextInput />
  `,
};