## Modal

A basic modal component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `children` | `Any` | `null` | All children components to be rendered inside the modal. **Note: children is given preference over title, body and footer props** |
| `title` | `String` | `''` | Title for modal. ( Displayed only when no children are passed. ) |
| `body` | `Any` | `null` | Modal Body / Content section. ( Displayed only when no children are passed. ) |
| `footer` | `Any` | `null` | Footer content for modal. ( Displayed only when no children are passed. ) |
| `className` | `String` | `''` | Set a class to style the Component |
| `open` | `boolean` | `false` | Toggle modal show / hide. ( `Required` ) |

### Theme

| Name     | Description|
|:---------|:-----------|
| `modal-backdrop`   | Class used for the modal backdrop element.|
| `modal`   | Class used for the modal element.|
| `modal-title`   | Class used for the default modal title element when title prop is passed.|
| `modal-body`   | Class used for the default modal content element when body prop is passed.|
| `modal-footer`   | Class used for the default modal footer element when footer prop is passed.|

### Example Usage
```
class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
  this.setState({ 
      open: true
    });
  }
  
  render() {
    return (
      <div>
        <PreviewBlock header="Simple Modal">
        <Button type="primary" onClick={this.toggleModal}>Click to Open Modal</Button>
          <Modal title="This is sample modal" open={this.state.open} />
        </PreviewBlock>
      </div>
    )
  }
}
```
