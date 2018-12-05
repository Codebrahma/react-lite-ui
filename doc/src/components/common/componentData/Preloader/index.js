export const componentData = {
  htmlStructure: `
    <div class="loader-wrapper">
      <div class="circlesLoaderDefault medium">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
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
  componentUsage: `
    class Demo extends React.Component {
      render() {
        return (
          <div>
            { /* Preview Block-1 */ }
            <PreviewBlock header="Default Preloader (size, color)">
              <PreviewElements>
                <span>
                  small, danger
                  <Preloader
                    size='small'
                    color='danger'  
                  />
                </span>
                <span>
                  medium, primary
                  <Preloader />
                </span>
                <span>
                  large, dark
                  <Preloader
                    size='large'
                    color='dark'
                  />
                </span>
              </PreviewElements>
            </PreviewBlock>
            { /* Preview Block-2 */ }
            <PreviewBlock header="Preloader with dots (size, color)">
              <PreviewElements>
                <span>
                  small, warning
                  <Preloader
                    loader='dotsLoader'
                    size='small'
                    color='warning'
                  />
                </span>
                <span>
                  medium
                  <Preloader
                    loader='dotsLoader'
                  />
                </span>
                <span>
                  large, primary
                  <Preloader 
                    loader='dotsLoader'            
                    size='large'
                    color='primary'
                  />
                </span>
              </PreviewElements>
            </PreviewBlock>
            { /* Preview Block-3 */ }
            <PreviewBlock header="Preloader with fade-away effect (size, color)">
              <PreviewElements>
              <span>
                small, success
                  <Preloader
                    loader='fadeAwayLoader'
                    size='small'
                    color='success'
                  />
                </span>
                <span>
                  medium, hue(360deg)
                  <Preloader
                    loader='fadeAwayLoader'
                  />
                </span>
                <span>
                  large, info
                  <Preloader 
                    loader='fadeAwayLoader'            
                    size='large'
                    color='info'
                  />
                </span>
              </PreviewElements>
            </PreviewBlock>
            { /* Preview Block-4 */ }
            <PreviewBlock header="Preloader with lines (size, color)">
              <PreviewElements>
              <span>
                small, primary
                  <Preloader
                    loader='linesLoader'
                    size='small'
                    color='primary'
                  />
                </span>
                <span>
                  medium, hue(360deg)
                  <Preloader
                    loader='linesLoader'
                  />
                </span>
                <span>
                  large, success
                  <Preloader
                    loader='linesLoader'
                    size='large'
                    color='success'
                  />
                </span>
              </PreviewElements>
            </PreviewBlock>
            { /* Preview Block-5 */ }
            <PreviewBlock header="Preloader with color circle (size, color)">
              <PreviewElements>
              <span>
                small, secondary
                  <Preloader
                    loader='colorCircleLoader'
                    size='small'
                    color='secondary'
                  />
                </span>
                <span>
                  medium, hue(360deg)
                  <Preloader
                    loader='colorCircleLoader'
                  />
                </span>
                <span>
                  large, danger
                  <Preloader
                    loader='colorCircleLoader'
                    size='large'
                    color='danger'
                  />
                </span>
              </PreviewElements>
            </PreviewBlock>
          </div>
        )
      }
    }
  `,
};