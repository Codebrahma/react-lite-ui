export const componentData = {
  htmlStructure: `
    <div id="tooltip_wrapper" class="tooltip baseContent">
      <div class="contentWrapper">
        Look Down
      </div>
      <!-- Condiitonally rendered -->
      <div class="tip" id="tip">
        <div class="tooltipContent">
          Normal Tooltip
        </div>
      </div>
    </div>
  `,
  propsData: [
    {
      prop: 'children',
      type: 'String',
      defaultValue: 'null',
      description: 'Children to be rendred as base content',
    },
    {
      prop: 'tooltipText',
      type: 'String',
      defaultValue: '',
      description: 'Prop to render in text in tooltip.( Required )',
    },
    {
      prop: 'top',
      type: 'Boolean',
      defaultValue: 'undefined',
      description: 'Prop defining the top positioned tooltip',
    },
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Set a class to style the component',
    },
  ],  
  themesData: [
    {
      name: 'tooltip',
      description: 'Class used for the root wrapper element.',
    },
    {
      name: 'baseContent',
      description: 'Class used for the base content.',
    },
    {
      name: 'tip',
      description: 'Class used for the tooltip wrapper.',
    },
    {
      name: 'tooltipContent',
      description: 'Class used for the tooltip content.',
    },
    {
      name: 'top',
      description: 'Class used for the top positioned tooltip.',
    },
  ],
  basicComponent: `
    <Tooltip tooltipText='Normal Tooltip'>Look down</Tooltip>
  `,
  componentUsage: `
    class Demo extends React.Component {
      constructor(props) {
        super(props);
      }

      render() {
        return (
          <PreviewElements>
            {/* Preview Block 1 */}
            <PreviewBlock header="Default Tooltip">
              <Tooltip tooltipText='Normal Tooltip'>Look down</Tooltip>
            </PreviewBlock>
            {/* Preview Block 2 */}
            <PreviewBlock header="Tooltip at top">
              <Tooltip tooltipText='Top Tooltip' top>Look up</Tooltip>
            </PreviewBlock>
          </PreviewElements>
        )
      }
    }
  `,
};