## Pagination

A basic pagination component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `defaultActive` | `Number` | `1` | Default active page in the pagination component. |
| `total` | `Number` | &nbsp; | Total number of pages. (`Required`) |
| `navigationButtons` | `boolean` | `false` | Shows navigation buttons when `true`. |
| `className` | `String` | `''` | Set a class to style the Component |

### Theme

| Name     | Description|
|:---------|:-----------|
| `pagination-wrapper` | Class used for the wrapper element.|
| `pagination` | Class used for the dynamic pagination-steps' wrapper element.|
| `pagination-steps` | Class used for the pagination steps.|
| `active` | Class used for the active pagination step.|
| `left` and `right` | Class used for the left and right navigation buttons.|
| `dots` | Class used for displaying dots between ends and current portion.|

### Example Usage
```
class Demo extends React.Component {
    render() {
      return (
        <div>
          <PreviewBlock header="Pagination">
            <Pagination total={10}/>
          </PreviewBlock>
        </div>
      )
    }
  }
```
