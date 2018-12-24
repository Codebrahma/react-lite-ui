export const componentData = {
  htmlStructure:`
    <div class="badge-container badge-container-small">
      <button class="button primary icon-left">
        default
      </button>
      <span id="badge_count" class="badge small">
        0
      </span>
    </div>
  `,
  propsData: [
    {
      prop: 'children',
      type: 'Any',
      defaultValue: 'null',
      description: 'A child component to apply badge. ( Required )',
    },
    {
      prop: 'badgeCount',
      type: 'Number',
      defaultValue: '0',
      description: 'Counter value to be displayed on badge',
    },
    {
      prop: 'size',
      type: 'String',
      defaultValue: 'small',
      description: 'Change the size of the badge component. Possible values are - \'small\', \'medium\' and \'large\'',
    },
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Set a class to style the Component.',
    },
  ],  
  themesData: [
    {
      name: 'badge-container',
      description: 'Class used for the wrapper element.',
    },
    {
      name: 'badge-container-${size}',
      description: 'Class used for the size (small, medium, large) of the wrapper element.',
    },
    {
      name: 'badge',
      description: 'Class used for the badge element.',
    },
    {
      name: '${size}',
      description: '	Class used for the size (small, medium, large) of the badge element.',
    },
  ],
  basicComponent: `
    <Badge>
      <Button type="primary">Default</Button>
    </Badge>
  `,
  componentUsage: `
    // Component.js
    
    class Demo extends React.Component {
      constructor(props) {
        super(props);
          this.state = {
            badgeCount: 0,
          }
        this.debounce = this.debounce.bind(this);
        this.handleBadgeCount = this.handleBadgeCount.bind(this);
      }

      // Function to prevent immediate clicks
      debounce(func, wait, immediate) {
        let timeout;
        return function() {
          const context = this;
          const args = arguments;
          const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          const callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      };

      // Funtion to hande badgeCount
      handleBadgeCount(type) {
        switch (type) {
          case 'plus':
            this.setState(prevState => ({
              badgeCount: prevState.badgeCount + 1,
            }))
            break;
          case 'minus':
            this.setState(prevState => ({
              badgeCount: prevState.badgeCount - 1,
            }))
            break;
        }
      }

      render() {
        return (
          <div>
            <PreviewElements>
              <PreviewBlock header="default badge">

              {/* Default Badge */}
                <Badge>
                  <Button>Default</Button>
                </Badge>

              </PreviewBlock>
              <PreviewBlock header="customized badge">

              {/* Custom themed Badge, Refer theme.scss */}
                <Badge badgeCount={25} size="medium" theme={componentTheme}>
                  <Button type="warning" flat>Custom</Button>
                </Badge>
                
              </PreviewBlock>
            </PreviewElements>
            <PreviewBlock header="Controlled badge count">
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              
              {/* badge count decrementer */}
                <Button iconButton bordered type="danger" disabled={this.state.badgeCount===0} onClick={this.debounce(() => this.handleBadgeCount('minus'), 250)}>
                  - 1
                </Button>

              {/* Controlled Badge Count */}
                <Badge size="medium" badgeCount={this.state.badgeCount}>
                  <Button size="medium">count</Button>
                </Badge>

              {/* badge count incrementer */}
                <Button bordered iconButton type="success" onClick={this.debounce(() => this.handleBadgeCount('plus'), 250)}>
                  + 1
                </Button>

              </div>
            </PreviewBlock>
            <PreviewBlock header="Sizabe Badges">
              <PreviewElements>

              {/* Small sized badge */}
                <Badge badgeCount={1}>
                  <Button>small</Button>
                </Badge>

              {/* Medium sized Badge */}
                <Badge badgeCount={22} size="medium">
                  <Button type="warning" size="medium">medium</Button>
                </Badge>

              {/* Large sized Badge */}
                <Badge badgeCount={33} size="large">
                  <Button type="success" size="large">large</Button>
                </Badge>

              </PreviewElements>
            </PreviewBlock>
          </div>
        )
      }
    }
  `,
  componentUsageTheme: `
    // theme.scss

    :local(.badge) {
      background-color: rgb(15, 199, 231);
      color: rgb(54, 15, 15);;
    }
  `,
};