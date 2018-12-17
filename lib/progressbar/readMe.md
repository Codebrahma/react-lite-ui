## Progress Bar

A basic progress bar component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `progress` | `Number` | 0 | A number ( range 0 - 100 ) indicating the progress. |
| `type` | `String` | `primary` | Color / theme preset for the progress bar. Valid options are 'primary', 'secondary' and 'success' |
| `showProgressText` | `Boolean` | `false` | Set a boolean to indicate wether progress bar should display the progress percentage. |

### Theme

| Name     | Description|
|:---------|:-----------|
| `bar` | Class used for the wrapper / main bar.|
| `progress` | Class used for the progress bar.|
| `primary`, `secondary`, `success` | Class used for applying different color presets. |

### Example Usage
```
class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        progress: 0,
      };
      this.animate = this.animate.bind(this);
      this.animate();
    }

    animate() {
      setInterval(
        () => {
          this.setState(prevState => ({
            progress: (prevState.progress + 1) % 100,
          }));
        },
        75
      );
    }
    
    render() {
      return (
        <div>
          <PreviewBlock header="Progress bar">
            <ProgressBar progress={this.state.progress} showProgressText={true}/>
          </PreviewBlock>
        </div>
      )
    }
  }
```
