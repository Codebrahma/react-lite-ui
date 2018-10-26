import React from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import PropTypes from 'prop-types';
import defaultTheme from './theme.scss';

class Table extends React.Component {
  /*
   *  the table header content will be rendered from accepting columns prop as array,
   *  the number of columns in table is directly proportional to
   *  length of columns array length from prop
   */
  renderTableHeader = () => {
    const { columns, theme } = this.props;
    return (
      <div className={theme.tableHeader}>
        { columns && columns.map(({
            key, title, ...other
          }) => (
            <div
              key={`${key}-${title}`}
              className={theme.tableHeaderCell}
              {...other}
            >
              {title}
            </div>
          ))
        }
      </div>
    );
  }

  /*
   *  This function renders the content of each row of the  table.
  */
  renderTableRow = (eachData, rowKey) => {
    const { columns, theme } = this.props;
    return (
      <div className={theme.tableBodyRow} key={rowKey}>
        {
          columns && columns.map(({ title, key }) => (
            <div
              key={`${title}-${eachData[key]}`}
              className={theme.tableBodyCell}
            >
              {eachData[key]}
            </div>
          ))
        }
      </div>
    );
  }

  /*
   *  This function renders the body content of the  table.
   *  Number of rows of table is directly proportional to length
   *  of data array length from props.
   *  data is iterated to pass every item as argument to renderTableRow function.
  */
  renderTableBody = () => {
    const { data, theme } = this.props;
    return (
      <div className={theme.tableBody}>
        {
          data && data.map((eachData, index) => this.renderTableRow(eachData, index))
        }
      </div>
    );
  }

  render() {
    const {
      theme,
    } = this.props;
    return (
      <div className={classnames(theme.tableWrapper)}>
        <div className={theme.table}>
          { this.renderTableHeader() }
          { this.renderTableBody() }
        </div>
      </div>
    );
  }
}

Table.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.object]),
  columns: PropTypes.oneOfType([PropTypes.array]).isRequired,
  data: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

Table.defaultProps = {
  theme: defaultTheme,
};

export default themr('CBTable', defaultTheme)(Table);

