## Popover

The Popover component

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `children` | `Any` | `null` | children to be rendered with popover. ( `Required` ) |
| `title` | `string` | &nbsp; | Prop to set the title of popover. |
| `content` | `Any` | &nbsp; | Prop to render the content of popover. (`Required`) |
| `actionContent` | `Any` | `confirm` | Prop to render the content of action in popover. |
| `position` | `String` | `bottomLeft` | Prop to set the position of popover. Possible positions are `topLeft`, `top`, `topRight`, `bottomLeft`, `bottom`, `bottomRight`, `leftTop`, `left`, `leftBottom`, `rightTop`, `right` and `rightBottom` |
| `onConfirm` | `Function` | &nbsp; | Callback to be called when clicked on action button. |
| `noAction` | `Boolean` | `false` | Prop to be sent when no action is required from popover. |
| `className` | `String` | &nbsp; | Set a class to style the component. |

### Theme

| Name     | Description|
|:---------|:-----------|
| `popover`   | Class used for the root element.|
| `popoverWrapper`   | Class used for the popover element.|
| `${position}Popover`   | Class used for the positioning the popover element.|
| `contentWrapper`   | Class used for the children.|
| `title`   | Class used for the title of popover.|
| `popoverContent`   | Class used for the content of popover.|
| `popoverArrow`   | Class used for the arrow of popover.|
| `actionWrapper`   | Class used for the root of action element.|
| `actionContent`   | Class used for the content of action element.|

### Usage
```
class Demo extends React.Component {

  state = {
    deleted: false,
  }

  handleDelete = () => {
    this.setState({
      deleted: true,
    })
  }

  render() {
    const { deleted } = this.state;
    return (
      <Popover
        content="Are you sure to delete?"
        actionContent={<Button type="danger">Confirm</Button>}
        onConfirm={this.handleDelete}
        position="right"
      >
        <Button type={deleted ? 'danger' : 'warning'}>
          {deleted ? 'deleted' : 'delete'}
        </Button>
      </Popover>
    )
  }
}
```