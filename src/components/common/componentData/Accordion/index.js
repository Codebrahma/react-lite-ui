export const componentData = {
  htmlStructure: `
    <div class="accordionBody>
      <div>
        <div class="itemWrapper">
          <div class="item">
            <div class="heading"></div>
            <div class="content"></div>   
          </div>
        </div>
      </div>
    </div>
  `,
  propsData: [
    {
      prop: 'data',
      type: 'Array',
      defaultValue: '',
      description: 'An array of options for autocompletion. ( Required )',
    },
    {
      prop: 'headerKey',
      type: 'String',
      defaultValue: 'header',
      description: 'Set a key for the header of the accordion.',
    },
    {
      prop: 'contentKey',
      type: 'String',
      defaultValue: 'content',
      description: 'Set a key for the content of the accordion.',
    },
    {
      prop: 'borderless',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop to render borderless accordion.',
    },
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'set a class to style the Component.',
    },
    {
      prop: 'headerClassName',
      type: 'String',
      defaultValue: '',
      description: 'Set a class for the header',
    },
    {
      prop: 'contentClassName',
      type: 'String',
      defaultValue: '',
      description: 'Set  a class for the content.',
    },
    {
      prop: 'allowMultipleExpanded',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Expand more the one item.',
    },
  ],
  themesData: [
    {
      name: 'accordionBody',
      description: 'Class used for the accordion body.',
    },
    {
      name: 'itemWrapper',
      description:
        'Class used for the upper container of the items in the accordion.',
    },
    {
      name: 'item',
      description: 'Class used for the items in the accordion.',
    },
    {
      name: 'heading',
      description: 'Class used for the header of the accordion.',
    },
    {
      name: 'content',
      description: 'Class used for the content of the accordion.',
    },
    {
      name: 'headerActive',
      description: 'Class used for the header when the content is visible. ',
    },
    {
      name: 'contentText',
      description: 'Class used for the text of the content.',
    },
    {
      name: 'open',
      description: 'Class used for icon when the item is opened.',
    },
    {
      name: 'close',
      description: 'Class used for icon when the item is closed. ',
    },
    {
      name: 'noBorder',
      description: 'Class used for the items to remove the border. ',
    },
  ],
  basicComponent: `
      class Demo extends React.Component {
        render() {
            const items = [
              {header:'Lorem Ipsum is simply dummy text of ',content:'Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry'},
              {header:'printing and typesetting industry',content:'Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry'},
        ]
          return (
            <div>
                <Accordion data={items} />
            </div>
          )
        }
      }`,
  componentUsage: `
    // Component.js
    class Demo extends React.Component {
      render(){
         const items = [
          {header:'Lorem Ipsum is simply dummy text of ',content:'Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry'},
          {header:'printing and typesetting industry',content:'Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry'},
         ];
       return (
         <div>
             <PreviewBlock header="Default accordion">
               {/*Default themed accordion*/}
                 <Accordion data={items} />
               </PreviewBlock>
             <PreviewBlock header="accordion with multiple item expended">
               {/*accordion with props*/}
                 <Accordion data={items} allowMultipleExpanded/>
               </PreviewBlock>
             <PreviewBlock header="customized accordion">
               {/* Custom themed accordion, Refer theme.scss below */}
                 <Accordion data={items} theme={componentTheme} />
                 </PreviewBlock>
         </div>
       )
      }
    }
  `,
  componentUsageTheme: `
    // theme.scss

    :local(.itemWrapper){
      :hover {
          color: chartreuse;
      }
  }
  `
}
