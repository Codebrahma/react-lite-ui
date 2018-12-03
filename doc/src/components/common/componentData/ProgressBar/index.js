export const componentData = {
  htmlStructure: `
    <div class="bar">
      <!-- Conditionally rendered -->
      <div class="text" aria-label="progress-text">
        <strong>100%</strong>
      </div>
      <div
        aria-label="progress"
        class="progress primary"
        style="width: 40%;"
      />
      </div>
    </div>
  `,
  propsData: [
    {
      prop: 'progress',
      type: 'Number',
      defaultValue: '0',
      description: 'A number ( range 0 - 100 ) indicating the progress.',
    },
    {
      prop: 'type',
      type: 'String',
      defaultValue: 'primary',
      description: 'Color / theme preset for the progress bar. Valid options are \'primary\', \'secondary\' and \'success\'',
    },
    {
      prop: 'showProgressText',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Set a boolean to indicate wether progress bar should display the progress percentage.',
    },
  ],  
  themesData: [
    {
      name: 'bar',
      description: 'Class used for the wrapper / main bar.',
    },
    {
      name: 'progress',
      description: 'Class used for the progress bar.',
    },
    {
      name: '${type}',
      description: 'Class used for applying different color (primary, secondary, success) presets.',
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