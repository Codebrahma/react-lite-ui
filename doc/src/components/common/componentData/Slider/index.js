export const componentData = {
  htmlStructure: `
    <div class="slider">
      <div class="slider-tracker" style="width: 14.1402%;">
        <span class="slider-button"></span>
        <div class="tooltip">
          <span>14</span>
          <div></div>
        </div>
      </div>
    </div>
  `,
  propsData: [
    {
      prop: 'range',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop to render range slider.',
    },
    {
      prop: 'disabled',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Disables the slider.',
    },
    {
      prop: 'min',
      type: 'Number',
      defaultValue: '0',
      description: 'Prop to set the minimum value of slider.',
    },
    {
      prop: 'max',
      type: 'Number',
      defaultValue: '100',
      description: 'Prop to set the maximum value of slider.',
    },
    {
      prop: 'onChange',
      type: 'Function',
      defaultValue: '',
      description: 'The callback function to be called when slider value changes, returns min and max values.',
    },
  ],  
  themesData: [
    {
      name: 'slider',
      description: 'Class used for the root element.',
    },
    {
      name: 'slider-button',
      description: 'Class used for slider button element.',
    },
    {
      name: 'slider-tracker',
      description: 'Class used for slider tracking element.',
    },
    {
      name: 'slider-offset',
      description: 'Class used for slider offset element, when using range slider.',
    },
    {
      name: 'tooltip',
      description: 'Class used for slider tooltip element.',
    },
  ],
  basicComponent: `
    <Slider />
  `,
};