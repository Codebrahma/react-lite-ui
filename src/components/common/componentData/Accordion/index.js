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
    ]
}
