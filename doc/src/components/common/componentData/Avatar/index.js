export const componentData = {
  htmlStructure: `
    <div id="avatar" class="avatar darkGrey">
      <div class="avatarContent">
        C
      </div>
    </div>
  `,
  propsData: [
    {
      prop: 'children',
      type: 'String',
      defaultValue: 'null',
      description: '	Children as a string to render an avatar with alphabet',
    },
    {
      prop: 'alphabet',
      type: 'String',
      defaultValue: '',
      description: 'Prop to render avatar with alphabet',
    },
    {
      prop: 'image',
      type: 'String',
      defaultValue: 'null',
      description: '	Prop to render avatar with image',
    },
    {
      prop: 'alt',
      type: 'String',
      defaultValue: '',
      description: 'Alternate text for image',
    },
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Set a class to style the component',
    },
    {
      prop: 'bgColor',
      type: 'String',
      defaultValue: 'darkGrey',
      description: 'Set a class to apply background color to the component. Possible vales are darkBlue, lightBlue, green, orange, lightRed, white, grey and darkGrey',
    },
  ],  
  themesData: [
    {
      name: 'avatar',
      description: 'Class used for the root element.',
    },
    {
      name: 'avatarComtent',
      description: 'Class used for the child element.',
    },
  ],
  basicComponent: `
    <Avatar>C</Avatar>
  `,
  componentUsage: `
    //  Component.js

    class Demo extends React.Component {
      render() {
        const MenuIcon = () => (
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1"  version="1.1" viewBox="0 0 32 32" width="20px">
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
          </svg>
        );
        return (
          <div>
            <PreviewElements>
              <PreviewBlock header="Avatar with Alphabets and background colors">
                <PreviewElements>

                {/* Components with differtent backgrounds controlled through props */}
                  <Avatar bgColor="orange">R</Avatar>
                  <Avatar alphabet='E' bgColor="grey"/>
                  <Avatar bgColor="lightBlue">A</Avatar>
                  <Avatar alphabet='C' />
                  
                  {/* Custom Themed Avatar, Refer theme.scss */}
                  <Avatar theme={componentTheme}>T</Avatar>
                
                  </PreviewElements>
              </PreviewBlock>
            </PreviewElements>
            <PreviewElements>
              <PreviewBlock header="Avatars with Image and icon">
                <PreviewElements>

                {/* Avatar with image and icon controlled with props */}
                  <Avatar image="https://placeimg.com/80/80/animals"/>
                  <Avatar bgColor="darkBlue"><MenuIcon /></Avatar>

                </PreviewElements>
              </PreviewBlock>
            </PreviewElements>
          </div>
        )
      }
    }
  `,
  componentUsageTheme: `
    //  theme.scss

    :local(.avatar) {
      background: green;
    }
  `,
};