import React from 'react';
import cx from 'classnames';
import styles from './styles.scss';

const DocumentationPage = ({
  isDocumentationOn,
  expandDocumentation,
  activeDocs,
}) => {
  const docStatusClass = isDocumentationOn ? 'active' : '';
  return (
    <div className={cx(styles.documentation, docStatusClass)}>
      <div className="header">
        Documentation
      </div>
      <div className="content" dangerouslySetInnerHTML={{ __html: activeDocs }} />
      <div className="empty-div" />
    </div>
  );
}


export default DocumentationPage;
