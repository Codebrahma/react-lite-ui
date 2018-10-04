## Badge

A basic badge component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `children` | `Any` | `null` | `Required` A child component to apply badge. ( `Required` ) |
| `className` | `String` | `''` | Set a class to style the Component. |
| `badgeCount` | `Number` | `0` | Counter value to be displayed on badge.  |
| `size` | `String` | `''` | Change the size of the badge component. Possible values are - **'*small* '**, **'*medium* '** and **'*large* '** |

### Theme

| Name     | Description|
|:---------|:-----------|
| `badge-container` | Class used for the wrapper element.|
| `badge-container-small` | Class used for the size of the wrapper element. |
| `badge-container-medium`   | Class used for the size of the wrapper element. |
| `badge-container-large`   | Class used for the size of the wrapper element. |
| `badge`   | Class used for the badge element. |
| `small`   | Class used for the size of the badge element. |
| `medium`   | Class used for the size of the badge element. |
| `large`   | Class used for the size of the badge element. |

### Example Usage
```
<Badge>
    <Button type="primary">Default</Button>
</Badge>
```
