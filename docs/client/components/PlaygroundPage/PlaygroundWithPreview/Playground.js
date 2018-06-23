import React from 'react';
import Editor from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

import styles from './styles.scss';

import './editor.css';

class Playground extends React.Component {
  constructor(props) {
    super(props);

  }
  
  componentDidMount() {
    this.editor = Editor.fromTextArea(this.refs.editor, {
      mode: 'javascript',
      lineNumbers: false,
      smartIndent: false,
      tabSize: 2,
      matchBrackets: true,
      theme: 'custom',
      readOnly: false,
    });
    this.editor.on('change', this.handleChange);
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.code !== prevProps.code) {
      this.editor.setValue(this.props.code);
    }
  }

  setCode = (code) => {
    this.editor.getDoc().setValue(code);
    this.handleChange();
  }

  handleChange = () => {
    this.props.onChange(this.editor.getValue());
  };


  render() {
    return (
      <div className={styles.playground}>
        <textarea
          ref="editor"
          defaultValue={this.props.code}
        />
      </div>
    );
  }
}

export default Playground;