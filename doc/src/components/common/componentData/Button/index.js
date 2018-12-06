export const componentData = {
  htmlStructure: `
    <div>
      <button class="button primary icon-left">
       primary
      </button>
    </div>
  `,
  propsData: [
    {
      prop: 'children',
      type: 'Any',
      defaultValue: 'Button',
      description: 'All children components to be rendered inside the button',
    },
    {
      prop: 'type',
      type: 'String',
      defaultValue: 'primary',
      description: 'Represents the style to be applied for the button. Possible values are primary, secondary, success, danger, warning, info, and dark',
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
    {
      prop: 'href',
      type: 'String',
      defaultValue: 'null',
      description: 'Creates a link for the button.',
    },
    {
      prop: 'icon',
      type: 'String / Element',
      defaultValue: 'null',
      description: 'Value of the icon',
    },
    {
      prop: 'iconAlignment',
      type: 'String',
      defaultValue: 'left',
      description: 'Set an alignment of the icon. Possible values are left, right',
    },
    {
      prop: 'iconButton',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop to be sent for rendering icon only type button',
    },
    {
      prop: 'onClick',
      type: 'Function',
      defaultValue: '',
      description: 'Callback to be called when the button is clicked',
    },
    {
      prop: 'disabled',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop to disable the button',
    },
    {
      prop: 'bordered',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop to render bordered button',
    },
    {
      prop: 'borderless',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop to render borderless button',
    },
    {
      prop: 'flat',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop to render flat button',
    },
  ],  
  themesData: [
    {
      name: 'button',
      description: 'Class used for the root element.',
    },
    {
      name: '${type}',
      description: 'Class used for styling type (primary, secondary, success, danger, warning, info, dark) buttons',
    },
    {
      name: '${type}Bordered',
      description: 'Class used for styling bordered buttons of specific type',
    },
    {
      name: '${size}',
      description: 'Class used for styling ( small, medium, large) sized buttons',
    },
    {
      name: 'iconButtonWrapper',
      description: 'Class used for styling root element of icon only buttons',
    },
    {
      name: 'iconButton',
      description: 'Class used for styling icon only buttons',
    },
  ],
  basicComponent: `
    <Button>Primary</Button>
  `,
  componentUsage: `
    class Demo extends React.Component {
      constructor(props) {
        super(props);
        this.style = {
          buttonContainer: {
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gridGap: 20,
            alignItems: "center"
          }
        };
      }
      render() {
        const MenuIcon = () => (
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="50px">
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
          </svg>
        );
        return (
          <div>
            { /* Preview Block-1 */ }
            <PreviewBlock header="Styled Buttons">
              <PreviewElements>
                <Button>Primary</Button>
                <Button type="secondary">Secondary</Button>
                <Button type="success">Success</Button>
              </PreviewElements>
            </PreviewBlock>
            { /* Preview Block-2 */ }
            <PreviewBlock header="Bordered Buttons">
              <PreviewElements>
                <Button bordered type="info">info</Button>
                <Button type="danger" bordered>danger</Button>
                <Button type="warning" bordered>warning</Button>
              </PreviewElements>
            </PreviewBlock>
            { /* Preview Block-3 */ }
            <PreviewBlock header="Borderless Buttons">
              <PreviewElements>
                <Button type="primary" borderless>Primary</Button>
                <Button type="warning" borderless>Warning</Button>
                <Button type="dark" borderless>dark</Button>
              </PreviewElements>
            </PreviewBlock>
            { /* Preview Block-4 */ }
            <PreviewBlock header="Flat Buttons">
              <PreviewElements>
                <Button type="success" flat>Success</Button>
                <Button type="danger" flat>Danger</Button>
                <Button type="warning" flat>Warning</Button>
              </PreviewElements>
            </PreviewBlock>
            { /* Preview Block-5 */}
            <PreviewBlock header="Buttons with icons and text">
              <PreviewElements>
                <Button type="warning" icon="icon-left">
                  icon left
                </Button>
                <Button type="success" icon="icon-right" iconAlignment="right">
                  icon right
                </Button>
                <Button iconButton icon={<MenuIcon />} />
              </PreviewElements>
            </PreviewBlock>
            { /* Preview Block-6 */ }
            <PreviewBlock header="Sizable Buttons">
              <PreviewElements>
                <Button size="small">
                  Small
                </Button>
                <Button size="medium">
                  Medium
                </Button>
                <Button size="large">
                  Large
                </Button>
              </PreviewElements>
            </PreviewBlock>
          </div>
        );
      }
    }
  `,
};