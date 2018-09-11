## Preloader

The base Preloader component

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `loader` | `String` | `circlesLoader` | Defines the type 0f preloader to be rendered. Possible loaders are `dotsLoader`, `fadeAwayLoader` and `colorCircleLoader` |
| `color` | `String` | `default` | Represents the style to be applied for the button. Possible values are `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, and `dark` |
| `size` | `String` | `medium`  | Defines the size of the button. Possible values are `small`, `medium`, and `large` |
| `className` | `String` | `''` | Set a class to style the Component |

### Theme

| Name     | Description|
|:---------|:-----------|
| `loaderWrapper` | Class used for the root element.|
| `circlesLoader` | Class used for the default `circlesLoader`.|
| `dotsLoader` | Class used for the `dotsLoader`.|
| `fadeawayLoader` | Class used for the `fadeawayLoader`.|
| `colorCircleLoader` | Class used for the `colorCircleLoader`.|
| `primary` | Class used for styling `primary` colored loaders |
| `secondary` | Class used for styling `secondary` colored loaders |
| `success` | Class used for styling `success` colored loaders |
| `danger` | Class used for styling `danger` colored loaders |
| `warning` | Class used for styling `warning` colored loaders |
| `info` | Class used for styling `info` colored loaders |
| `light` | Class used for styling `light` colored loaders |
| `dark` | Class used for styling `dark` colored loaders |
| `small` | Class used for styling `small` sized loaders |
| `medium` | Class used for styling `medium` sized loaders |
| `large` | Class used for styling `large` sized loaders |

### Usage
```
  class App extends React.Component {
    this.state = {
      loading: false
    }
    render() {
      return (
        <div>
        {
          loading
            ? (
              <Preloader
                loader='fadeAwayLoader'
                size='large'
                color='info'
              />
            )
            : (
              <YourDataComponent />
            )
        }
        </div>
      )
    }
  }
```