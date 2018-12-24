export const componentData = {
    htmlStructure: `
      <div class="navbarWrapper staticPosition defaultColor">
        <div class="innerWrapper">
          <!-- Optional left Icon -->
          <div class="leftIcon">
            <img src="/link is passed as prop" alt="navbar-left-logo" />
          </div>
          <div class="navbarContent">
            <div class="leftContent">
              <span class="title">Title</span>
            </div>
            <div class="rightContent">
              <!-- Children passed to component -->
              <span>Nav Item 01</span>
              <span>Nav Item 02</span>
            </div>
          </div>
          <!-- Optional right Icon -->
          <div class="rightIcon">
            <img src="/link is passed as prop" alt="navbar-left-logo" />
          </div>
        </div>
      </div>
    `,
    propsData: [
      {
        prop: 'defaultActive',
        type: 'Number',
        defaultValue: '1',
        description: 'Default active page in the pagination component.',
      },
      {
        prop: 'className',
        type: 'String',
        defaultValue: '',
        description: 'Set a class to style the component',
      },
      {
        prop: 'total',
        type: 'Number',
        defaultValue: '',
        description: 'Total number of pages. (Required)',
      },
      {
        prop: 'navigationButtons',
        type: 'boolean',
        defaultValue: 'true',
        description: 'Shows navigation buttons when `true`.',
      },
    ],  
    themesData: [
      {
        name: 'pagination-wrapper',
        description: 'Class used for the wrapper element.',
      },
      {
        name: 'pagination',
        description: "Class used for the dynamic pagination-steps' wrapper element.",
      },
      {
        name: 'pagination-steps',
        description: 'Class used for the pagination steps.',
      },
      {
        name: 'active',
        description: 'Class used for the active pagination step.',
      },
      {
        name: 'left',
        description: 'Class used for the left navigation button.',
      },
      {
        name: 'right',
        description: 'Class used for the right navigation button.',
      },
      {
        name: 'dots',
        description: 'Class used for displaying dots between ends and current portion.',
      },
    ],
    basicComponent: `
      <Pagination total={10}/>
    `,
    componentUsage: `
      //  Component.js

      class Demo extends React.Component {
        render() {
          return (
            <PreviewElements>
              <PreviewBlock header="Pagination">
                <PreviewElements>

                {/* Default Pagination Component */}
                  <Pagination total={10}/>

                </PreviewElements>
              </PreviewBlock>
              <PreviewBlock header="Custom Pagination">
                <PreviewElements>

                {/* Custom themed Pagination Component, Refer theme.scss below */}
                  <Pagination total={6} theme={componentTheme} navigationButtons={false}/>
                
                </PreviewElements>
              </PreviewBlock>
            </PreviewElements>
          )
        }
      }
    `,
    componentUsageTheme: `
      //  theme.scss

      :local(.pagination-steps) {
        border-color: transparent;
        color: #8047c7;
      }
      
      :local(.active) {
        color: #ff8600;
      }
      
      :local(.dots) {
        span {
          height: 0.3em;
          width: 0.3em;
        }
      }
    `,
  };