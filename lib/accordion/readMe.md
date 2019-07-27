## Accordion

A basic accordion component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `data` | `Array` | &nbsp; | An array of contents for accordion. ( `Required` ) |
| `headerKey` | `String` | `header` | specify the key to be used for header from data. | 
| `contentKey` | `String` | `content` | specify the key to be used for content from data.|
| `borderless` | `Boolean` | `false` | Prop to render borderless accordion |
| `className` | `String` | &nbsp; | Set a class to style the Component|
| `headerClassName` | `String` | &nbsp;| Set a class for the header.|
| `contentClassName` | `String` | &nbsp;| Set a class for the content.|
| `allowMultipleExpanded` | `Boolean` | `false`| allows to expand more then one item.|

### Theme

| Name     | Description|
|:---------|:-----------|
| `accordionBody` | Class used for the accordion body.|
| `itemWrapper` | Class used for wrapper element of header and content for each item.|
| `item` | Class used for the items in the accordion.|
| `heading` | Class used for the header of the accordion.|
| `content` | Class used for the content of the accordion.|
| `headerActive` | Class used for the header when the content is visible.|
| `contentText` | Class used for the text of the content.|
| `open` | Class used for icon when the item is opened.|
| `close` | Class used for icon when the item is closed.|
| `noBorder` | Class used for the items to remove the border.|




### Example Usage
```
class Demo extends React.Component {
    render() {
      const items = [
          {header:'Lorem Ipsum is simply dummy text of ',content:'Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry',key:'1'},
          {header:'printing and typesetting industry',content:'Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry',key:'2'},
         ];
      return (
        <div>
            <Accordion data={items} />
        </div>
      )
    }
  }
```
