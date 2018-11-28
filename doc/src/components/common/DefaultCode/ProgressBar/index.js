export const defaultCode = {
  htmlStructure: 
  `class Demo extends React.Component {
    render() {
      return <ProgressBar>C</ProgressBar>;
    }
  }
  `,
  propsData: [
    {
      prop: 'ProgressBar  prop',
      defaultValue: 'default prop ProgressBar ',
      description: 'I am ProgressBar ing default description for component',
    },
    {
      prop: 'ProgressBar  some prop',
      defaultValue: 'some default prop ProgressBar ',
      description: 'I am some ProgressBar ing default description for component',
    },
  ],  
  themesData: [
    {
      name: 'default theme',
      description: 'ProgressBar ing description',
    },
    {
      name: 'default some theme',
      description: 'ProgressBar ing some description',
    },
  ],
  basicComponent: `
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
            <ProgressBar progress={this.state.progress} showProgressText={true}/>
          </div>
        )
      }
    }
  `,
};