export const componentData = {
  htmlStructure: `
    <div class="wrapper" data-key="main-menu">
      <div class="menu">
        <div class="wrapper">
          <span class="menuitem">Option-1</span>
          <div class="submenu">
            <span class="menuitem">
              <span>Submenu</span>
              <div class="arrow" />
            </span>
          </div>
          <span>Item-1</span>
          <span>Item-2</span>
          <span>Item-3</span>
        </div>
      </div>
    </div>
  `,
  propsData: [
    {
      prop: 'children',
      type: 'Any',
      defaultValue: '',
      description: 'All children components to be rendered inside a cardview',
    },
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Additional class(es) for custom styling. These classes will be added along with library specific styles',
    },
  ],  
  themesData: [
    {
      name: 'menu',
      description: 'Class used for the menu component.',
    },
    {
      name: 'wrapper',
      description: 'Class used for the parent wrapper of menu component. Applies flex property to the wrapper',
    },
    {
      name: 'arrow',
      description: 'Class used for arrow on dropdown.',
    },
    {
      name: 'submenu',
      description: 'Class used for nested menus.',
    },
    {
      name: 'menuitem',
      description: 'Class used for nested menu items.',
    },
  ],
  basicComponent: `
    class Demo extends React.Component {
      render() {
        return (
          <div>
            <Menu>
              <span>Option 1</span>
              <Menu submenu title="Submenu 1">
                  <span>sub1-Option 1</span>
                  <span>sub1-Option 2</span>
                </Menu>
              <Menu submenu title="Submenu 2">
                <span>sub2-Option1</span>
                <span>sub2-Option2</span>
                <Menu submenu title="Nested Submenu 1">
                  <span>Option 1</span>
                  <span>Option 2</span>
                </Menu>
                <Menu submenu title="Nested Submenu 2">
                  <span>Option 1</span>
                  <span>Option 2</span>
                </Menu>
              </Menu>
              <span>Option 2</span>
              <span>Option 3</span>
            </Menu>
          </div>
        )
      }
    }
  `
};