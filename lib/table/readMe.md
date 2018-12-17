## Table

The table component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `columns` | `Array` | &nbsp; | Array of data to be render as table column headers (`Required`). |
| `data` | `Array` | &nbsp; | Array of data to be rendered as table body cells (`Required`). |
| `sort` | `Boolean` | `false` | Prop to be sent, If sorting functionality is required. |

**Note**: Please check the usage for data structure of columns and data props.

### Theme

| Name     | Description|
|:---------|:-----------|
| `tableWrapper`   | Class used for the root element.|
| `table`   | Class used for the div wrapping all the rows and columns element.|
| `tableHeader`   | Class used for the table header element.|
| `tableHeaderCell`   | Class used for the cells in table header element.|
| `tableHeadCellContent`   | Class used for the content in table header cells.|
| `tableBodyCellContent`   | Class used for the content in table body cells.|
| `tableBody`   | Class used for the table body element.|
| `tableBodyRow`   | Class used for the rows in table body element.|
| `tableBodyCell`   | Class used for the cells in table body element.|
| `sortArrow`   | Class used for the sorting arrows in table header cells.|

### Usage
```
const Demo = () => {
  const columns = [
    { title: 'Name', key: 'name' },
    { title: 'Default Value', key: 'defaultValue' },
    { title: 'Description', key: 'description' },
  ];

  /* The properties of each object in data array is the `keys` given in columns prop. */

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
  ];
  return <Table columns={columns} data={data} sort />
}
```