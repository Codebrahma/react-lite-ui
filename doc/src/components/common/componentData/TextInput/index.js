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
    class Demo extends React.Component {
      render() {
        return (
          <div>
            <PreviewElements>
              {/* Preview Block 1 */}
              <PreviewBlock header="Default TextInput">
                <TextInput />
              </PreviewBlock>
              {/* Preview Block 2 */}
              <PreviewBlock header="Disabled TextInput">
                <TextInput disabled={true}/>
              </PreviewBlock>
            </PreviewElements>
            <PreviewElements>
              {/* Preview Block 3 */}
              <PreviewBlock header="Controlled width TextInput">
                <TextInput width='300px' placeholder="type here..."/>
              </PreviewBlock>
              <PreviewBlock header="Password TextInput">
                <TextInput type="password" placeholder="Enter password..."/>          
              </PreviewBlock>
            </PreviewElements>
          </div>
        )
      }
    }
  `,
};