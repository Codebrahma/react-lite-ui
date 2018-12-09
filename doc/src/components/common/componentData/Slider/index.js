export const componentData = {
  htmlStructure: `
    <div>
      <!-- HTML Content will be added after merging PR #150 -->
    </div>
  `,
  propsData: [
    {
      prop: 'Slider  prop',
      defaultValue: 'default prop Slider ',
      description: 'I am Slider ing default description for component',
    },
    {
      prop: 'Slider  some prop',
      defaultValue: 'some default prop Slider ',
      description: 'I am some Slider ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'Slider ing description',
    },
    {
      name: 'default some theme',
      description: 'Slider ing some description',
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