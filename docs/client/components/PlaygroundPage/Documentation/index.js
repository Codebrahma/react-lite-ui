import React from 'react';
import cx from 'classnames';
import styles from './styles.scss';

const DocumentationPage = ({
  isDocumentationOn,
  expandDocumentation,
}) => {
  const docStatusClass = isDocumentationOn ? 'active' : '';
  return isDocumentationOn ? (
    <div className={cx(styles.documentation, docStatusClass)}>
      <div className="header">
        Documentation
      </div>
      <button
        onClick={expandDocumentation}
      > Let me try!!! </button>  
    </div>
  ) : (
    <div className={cx(styles.documentation, docStatusClass)}>
      <button
        onClick={expandDocumentation}
      > Props </button>  
    </div>
  )
}


export default DocumentationPage;
