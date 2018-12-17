## Slider

The Slider component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `range` | `Boolean` | `false` | Prop to render range slider |
| `disabled` | `Boolean` | `false` | Disables the slider |
| `min` | `Number` | 0 | Prop to set the minimum value of slider |
| `max` | `Number` | 100 | Prop to set the maximum value of slider |
| `onChange` | `function` |  | The callback function to be called when slider value changes, returns min and max values. |

### Theme

| Name     | Description|
|:---------|:-----------|
| `slider`   | Class used for the root element.|
| `slider-button` |  Class used for slider button element. |
| `slider-tracker` |  Class used for slider tracking element. |
| `slider-offset` |  Class used for slider offset element, when using range slider. |
| `tooltip` |  Class used for slider tooltip element. |

### Usage

```
  <div>
    <Slider />
    <Slider range min={0} max={50} />
    <Slider onChange={(min, max) => console.log(min, max)} />
  </div>
```