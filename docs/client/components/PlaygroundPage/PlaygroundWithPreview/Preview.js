import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { transform } from 'babel-standalone';
import Card from '../../../../../src/card';
import Button from '../../../../../src/button';
import theme from '../../../components/common/DefaultCode/theme.scss';
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
    if (this.state.error) {
      this.setState({ error: null });
    }
    
    try {
      ReactDOM.unmountComponentAtNode(mountNode);
    } catch (e) {
      
    }

    try {
      const x = eval(this.compileCode())(...scope);
      ReactDOM.render(x, mountNode);
      if (this.state.error) {
        this.setState({ error: null });
      }
    } catch (err) {
        this.setTimeout(() => {
          this.setState({
            error: err.message,
          });
        }, 100);
    }
  }

  render () {

    return (
      <div className={styles.preview}>
        {
          this.state.error !== null ? (
            <div className="error">
              {this.state.error}
            </div>
          ) : null
        }
        <div ref="mount" />
      </div>
    );
  }
}

Preview.propTypes = {
  code: PropTypes.string.isRequired,
  scope: PropTypes.object,
};

Preview.defaultProps = {
  scope: { React, Card, Button, theme },
};

export default Preview;
