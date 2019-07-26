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
