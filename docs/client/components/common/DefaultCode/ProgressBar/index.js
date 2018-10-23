export const defaultCode = `
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
          <PreviewBlock header="Progress bar">
            <ProgressBar progress={this.state.progress} showProgressText={true}/>
          </PreviewBlock>
        </div>
      )
    }
  }
`;
