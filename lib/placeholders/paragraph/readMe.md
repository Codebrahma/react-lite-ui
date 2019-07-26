## Paragraph Placeholder

The paragrapg placeholder component.

### Properties

| Name    | Type    | Default                     | Description                                     |
| :------ | :------ | :-------------------------- | :---------------------------------------------- |
| `lines` | `array` | `['25', '75', '50', '100']` | Set the no of lines in card as array of widths. |

### Theme

| Name              | Description                      |
| :---------------- | :------------------------------- |
| `paragraphStyles` | Class used for the root element. |

### Usage

```

class Demo extends React.Component {
    state = {
       loading: false,
    }
    render() {
       const {loading} = this.state;
       return (
            <div>
                { loading ? <ParagraphPlaceholder theme={paragraphPlaceholderTheme} lines={linesArray} /> : 
                <div>User Content</div>
             </div>
        )
    }
}
```
