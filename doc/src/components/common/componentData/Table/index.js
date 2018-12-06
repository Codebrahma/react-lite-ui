export const componentData = {
  htmlStructure: `
    <div class="tableWrapper">
      <div class="table">
        <div class="tableHeader">
          <div class="tableHeaderCell" style="width: 150px;">
            <div class="tableHeadCellContent">
              Name
            </div>
          </div>
          <div class="tableHeaderCell" style="width: fit-content;">
            <div class="tableHeadCellContent">
              Description
            </div>
          </div>
        </div>
        <div class="tableBody">
          <div class="tableBodyRow">
            <div class="tableBodycell">
              <div class="tableBodyCellContent">
                Some Name
              </div>
            </div>
            <div class="tableBodycell">
              <div class="tableBodyCellContent">
                dolor sit amet, consectetur adipiscing elit, dolor
                sit amet
              </div>
            </div>
          </div>
          <div class="tableBodyRow">
            <div class="tableBodycell">
              <div class="tableBodyCellContent">
                Some Other Name
              </div>
            </div>
            <div class="tableBodycell">
              <div class="tableBodyCellContent">
                amet, consectetur dolor sit amet, consectetur
                adipiscing elit adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  propsData: [
    {
      prop: 'columns',
      type: 'Array',
      defaultValue: '',
      description: 'Array of data to be render as table column headers (Required)',
    },
    {
      prop: 'data',
      type: 'Array',
      defaultValue: '',
      description: 'Array of data to be rendered as table body cells (Required).',
    },
    {
      prop: 'sort',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Prop to be sent, If sorting functionality is required.',
    },
  ],  
  themesData: [
    {
      name: 'tableWrapper',
      description: 'Class used for the root element.',
    },
    {
      name: 'table',
      description: '	Class used for the div wrapping all the rows and columns element.',
    },
    {
      name: 'tableHeader',
      description: 'Class used for the table header element.',
    },
    {
      name: 'tableHeaderCell',
      description: 'Class used for the cells in table header element.',
    },
    {
      name: 'tableHeadCellContent',
      description: 'Class used for the content in table header cells.',
    },
    {
      name: 'tableBodyCellContent',
      description: 'Class used for the content in table body cells.',
    },
    {
      name: 'tableBody',
      description: 'Class used for the table body element.',
    },
    {
      name: 'tableBodyRow',
      description: 'Class used for the rows in table body element.',
    },
    {
      name: 'tableBodyCell',
      description: 'Class used for the cells in table body element.',
    },
    {
      name: 'sortArrow',
      description: 'Class used for the sorting arrows in table header cells.',
    },
  ],
  basicComponent: `
    class Demo extends React.Component {
      constructor(props) {
        super(props);
      }

      render() {
        const columns = [
          { title: 'Name', key: 'name', colWidth: '150px' },
          { title: 'Default Value', key: 'defaultValue' },
          { title: 'Description', key: 'description' },
        ];
        const data = [
          {
            name: 'Name-1',
            defaultValue: 'first value',
            description: 'dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing elit.',
          },
          {
            name: 'Name-2',
            defaultValue: 'second value',
            description: 'amet, consectetur dolor sit amet, consectetur adipiscing elit adipiscing elit.',
          },
          {
            name: 'Name-3',
            defaultValue: 'third value',
            description: 'consectetur adipiscing elit, dolor sit amet, .',
          },
          {
            name: 'Name-4',
            defaultValue: 'fourth value',
            description: 'bense dolor sit amet, consectetur adipiscing elit ctetur adipiscing elit, dolor sit amet.',
          },
          {
            name: 'Name-5',
            defaultValue: 'fifth value',
            description: 'ectetur adipiscing elit, dolor sit amet.',
          },
        ];
        return (
          <PreviewElements>
            <Table columns={columns} data={data} sort />
          </PreviewElements>
        )
      }
    }
  `,
};