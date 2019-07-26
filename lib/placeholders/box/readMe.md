## Box Placeholder

The box placeholder component.

### Properties

| Name    | Type     | Default   | Description                   |
| :------ | :------- | :-------- | :---------------------------- |
| `shape` | `String` | `default` | Prop to set the shape of box. |

### Theme

| Name        | Description                               |
| :---------- | :---------------------------------------- |
| `boxStyles` | Class used for the style the box element. |

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
                { loading ? <BoxPlaceholder theme={boxPlaceholderTheme} shape={boxShape} /> : 
                <div>User Content</div>
             </div>
        )
    }
}
```
