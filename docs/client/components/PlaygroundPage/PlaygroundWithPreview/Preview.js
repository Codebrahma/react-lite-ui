import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { transform } from 'babel-standalone';

import styles from './styles.scss';

class Preview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    }
    this.setTimeout = this.setTimeout.bind(this);
    this.compileCode = this.compileCode.bind(this);
    this.buildScope = this.buildScope.bind(this);
    this.executeCode = this.executeCode.bind(this);
  }

  componentDidMount() {
    this.executeCode();
  }

  componentDidUpdate (prevProps) {
    clearTimeout(this.timeoutID);
    if (this.props.code !== prevProps.code) {
      this.executeCode();
    }
  }

  setTimeout () {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout(...arguments);
  }

  compileCode () {
    const code = `
      (function (${Object.keys(this.props.scope).join(', ')}, mountNode) {
        ${this.props.code}
      });`;

    return transform(code, {
      presets: ['es2015', 'stage-0', 'react']
    }).code;
  }

  buildScope (mountNode) {
    return Object.keys(this.props.scope).map(key => this.props.scope[key]).concat(mountNode);
  }

  executeCode () {
    const mountNode = this.refs.mount;
    const scope = this.buildScope(mountNode);

    try {
      ReactDOM.unmountComponentAtNode(mountNode);
    } catch (e) {
      console.log(e);
    }
    try {
      
      const x = eval(this.compileCode())(...scope);
      ReactDOM.render(x, mountNode);
      if (this.state.error) {
        this.setState({ error: null });
      }
    } catch (err) {
      console.log(err);
      this.setTimeout(() => {
        this.setState({ error: err.toString() });
      }, 500);
    }
  }

  render () {
    return (
      <div className={styles.preview}>
        <div ref="mount" />
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className={styles.preview}>
  //       <div className="header">
  //         Preview
  //       </div>
  //       {code}
  //     </div>
  //   );
  // }
}

Preview.propTypes = {
  code: PropTypes.string.isRequired,
  scope: PropTypes.object,
};

Preview.defaultProps = {
  scope: { React },
};

export default Preview;
