export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <Menu>C</Menu>;
    }
  }
  `,
  propsData: [
    {
      prop: 'Menu  prop',
      defaultValue: 'default prop Menu ',
      description: 'I am Menu ing default description for component',
    },
    {
      prop: 'Menu  some prop',
      defaultValue: 'some default prop Menu ',
      description: 'I am some Menu ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'Menu ing description',
    },
    {
      name: 'default some theme',
      description: 'Menu ing some description',
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