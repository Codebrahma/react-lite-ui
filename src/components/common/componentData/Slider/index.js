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
      description: 'Render range slider when set to `true`',
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
      description: 'Class used for slider bar indicating the selected range.',
    },
    {
      name: 'slider-offset',
      description: 'Class used for slider offset for lower range when using range slider.',
    },
    {
      name: 'tooltip',
      description: 'Class used for slider tooltip element.',
    },
  ],
  basicComponent: `
    <Slider />
  `,
  componentUsage: `
    //  Component.js

    class Demo extends React.Component {
      render() {
        return (
          <div>
            <PreviewElements>
              <PreviewBlock header="Default Slider">

              {/* Default slider */}
                <Slider />

              </PreviewBlock>
              <PreviewBlock header="range slider">

              {/* Range slider with user set min and max values */}
                <Slider range min={0} max={50}/>

              </PreviewBlock>
            </PreviewElements>
            <PreviewElements>
            <PreviewBlock header="custom slider">

            {/* Custom Slider, Refer theme.scss */}
              <Slider theme={componentTheme} />

            </PreviewBlock>
            <PreviewBlock header="disabled Slider">

            {/* disabled slider */}
              <Slider disabled />

            </PreviewBlock>
          </PreviewElements>
        </div>
        )
      }
    }
  `,
  componentUsageTheme: `
    //  theme.scss

    :local(.slider-button) {
      background-color: #23a393;
    }
    
    :local(.slider-tracker) {
      background-color: #20716a;
    }
    
    :local(.tooltip) {
      background-color: #ffc0c2;
      color: #20716a;
      div {
        border-top-color: #ffc0c2;
      }
    }
  `,
};
