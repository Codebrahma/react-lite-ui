## Navbar

The base navbar component.

### Properties
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| `children` | `any` | `Navbar` | All children components to be rendered inside the navbar |
| `onMenuClick` | `Function` | `null` | Callback to be called when menu icon is clicked |
| `className` | `String` | &nbsp; | Set a class to style the component |
| `position` | `String` | `static` | Prop to define position of the navbar. Possible values are `static`, `sticky`, `fixed`, `absolute` and `relative` |
| `color` | `String` | `default` | Prop to define color of the navbar. |

### Theme

| Name     | Description|
|:---------|:-----------|
| `navbarWrapper`   | Class used for the root element.|
| `staticPosition`   | Class used for the static positioned navbar.|
| `stickyPosition`   | Class used for the sticky positioned navbar.|
| `fixedPosition`   | Class used for the fixed positioned navbar.|
| `absolutePosition`   | Class used for the absolute positioned navbar.|
| `relativePosition`   | Class used for the relative positioned navbar.|

### Usage
```
  <div>
    <Navbar onMenuClick={() => alert('Clicked Menu Button')}>
      Menu Navbar
    </Navbar>
    <Navbar>
      Navbar
      <Button type='light' onClick={() => alert('Clicked Login Button')}>login</Button>
    </Navbar>
  </div>
```
