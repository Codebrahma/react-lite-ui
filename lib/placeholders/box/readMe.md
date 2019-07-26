## Box Placeholder

The box placeholder component.

### Properties

| Name    | Type     | Default   | Description                   |
| :------ | :------- | :-------- | :---------------------------- |
| `shape` | `String` | `square` | Prop to set the shape of box.  |

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


### You can make custom card placeholder by putting together box and line placeholder.

```

const CustomPlaceholder = () => (
    <div style={{
        margin: "8px",
        padding: "16px"
    }}>
    <div style={{
      display: "flex",
      alignItems: "center"
    }}>
      <BoxPlaceholder />
      <LinePlaceholder lineWidth="75" />
    </div>

    <LinePlaceholder lineWidth="50" />
    <LinePlaceholder lineWidth="25" />
  </div>
) 

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
