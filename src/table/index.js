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
      <thead className={theme.tableHead}>
        <tr className={theme.tableHeadRow}>
          { columns && columns.map(({
              key, title, colSpan, rowSpan, ...other
            }) => (
              <th
                key={`${key}-${title}`}
                colSpan={colSpan}
                rowSpan={rowSpan}
                className={theme.tableHeadCell}
                {...other}
              >
                {title}
              </th>
            ))
          }
        </tr>
      </thead>
    );
  }

  /*
   *  This function renders the content of each row of the  table.
  */
  renderTableRow = (eachData, key) => {
    const { columns, theme } = this.props;
    return (
      <tr className={theme.tableBodyRow} key={key}>
        {
          columns && columns.map(column => (
            <td
              key={`${column.title}-${eachData[column.key]}`}
              colSpan={column.colSpan}
              rowSpan={column.rowSpan}
              className={theme.tableBodyCell}
            >
              {eachData[column.key]}
            </td>
          ))
        }
      </tr>
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
      <tbody className={theme.tableBody}>
        {
          data && data.map((eachData, index) => this.renderTableRow(eachData, index))
        }
      </tbody>
    );
  }

  render() {
    const {
      theme,
    } = this.props;
    return (
      <div className={classnames(theme.tableWrapper)}>
        <table className={theme.table}>
          { this.renderTableHeader() }
          { this.renderTableBody() }
        </table>
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

