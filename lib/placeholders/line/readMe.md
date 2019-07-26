## Line Placeholder

The line placeholder component.

### Properties

| Name        | Type     | Default | Description                                       |
| :---------- | :------- | :------ | :------------------------------------------------ |
| `lineWidth` | `String` | `100`   | Set the line width of the from [25, 50, 75, 100]. |

### Theme

| Name         | Description                      |
| :----------- | :------------------------------- |
| `lineStyles` | Class used for the root element. |

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
                { loading ? <LinePlaceholder theme={linePlaceholderTheme} lineWidth={'75'} /> : 
                <div>User Content</div>
             </div>
        )
    }
}
```

### You can make a paragraph placeholder by simple wrap line placeholder in a single div.

```

class ParagraphDemo extends React.Component {
    state = {
       loading: false,
    }
    render() {
       const {loading} = this.state;
       return (
            <div>
                { loading ? (<div style={{padding:"32px"}}>
                    <LinePlaceholder theme={linePlaceholderTheme} lineWidth={'75'} />
                    <LinePlaceholder theme={linePlaceholderTheme} lineWidth={'50'} />
                    <LinePlaceholder theme={linePlaceholderTheme} lineWidth={'100'} />
                </div>) : 
                <div>User Content</div>
             </div>
        )
    }
}
```