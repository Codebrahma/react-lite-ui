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
            <PreviewBlock header="Default Tooltip">

            {/* Default Tooltip */}
              <Tooltip tooltipText='Normal Tooltip'>
                <span style={{color: 'blue'}}>
                  Look down
                </span>
              </Tooltip>

            </PreviewBlock>
            <PreviewBlock header="Tooltip at top">

            {/* Top tooltip */}
              <Tooltip tooltipText='Top Tooltip' top>
                <span style={{color: 'blue'}}>
                  Look up
                </span>
              </Tooltip>

            </PreviewBlock>
          </PreviewElements>
        )
      }
    }
  `,
};