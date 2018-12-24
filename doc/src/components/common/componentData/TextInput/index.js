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
  componentUsage: `
    //  Component.js

    class Demo extends React.Component {
      render() {
        return (
          <div>
            <PreviewElements>
              <PreviewBlock header="Default TextInput">

              {/* Default TextInput */}
                <TextInput />

              </PreviewBlock>
              <PreviewBlock header="Disabled TextInput">

              {/* Disabled tectInput */}
                <TextInput disabled={true} />

              </PreviewBlock>
            </PreviewElements>
            <PreviewElements>
              <PreviewBlock header="Password TextInput">

              {/* Password TextInput */}
                <TextInput type="password" placeholder="Enter password..."/>

              </PreviewBlock>
              <PreviewBlock header="Custom  TextInput">

              {/* Custom TextInput, Refer theme.scss */}
                <TextInput placeholder="type here..." theme={componentTheme} />

              </PreviewBlock>
            </PreviewElements>
          </div>
        )
      }
    }
  `,
  componentUsageTheme: `
    //  theme.scss

    :local(.inputElement) {
      + .input-focus {
        background-color: #c85108;
      }
    }
  `,
};