import React from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import PropTypes from 'prop-types';
import defaultTheme from './theme.scss';

class Table extends React.Component {
  state = {
    tableData: this.props.data,
  }

  /*
   *  Function to sort the column data in ascending order
  */
  sortAscending = (key) => {
    const { tableData } = this.state;
    const sortedData = tableData.sort((a, b) => (a[key] < b[key] ? -1 : 1));
    this.setState({
      sortTitle: key,
      [`${key}Ascending`]: true,
      [`${key}Descending`]: false,
      tableData: sortedData,
    });
  };

  /*
   *  Function to sort the column data in descending order
  */
  sortDescending = (key) => {
    const { tableData } = this.state;
    const sortedData = tableData.sort((a, b) => (a[key] < b[key] ? 1 : -1));
    this.setState({
      sortTitle: key,
      [`${key}Ascending`]: false,
      [`${key}Descending`]: true,
      tableData: sortedData,
    });
  };

  /*
   *  the table header content will be rendered from accepting columns prop as array,
   *  the number of columns in table is directly proportional to
   *  length of columns array length from prop
  */

  /*  eslint-disable jsx-a11y/click-events-have-key-events  */
  /*  eslint-disable jsx-a11y/no-static-element-interactions */
  renderTableHeader = () => {
    const { columns, theme, sort } = this.props;
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
              <div className={theme.tableHeadCellContent}>
                {title}
                {sort && (
                  <div className={theme.sortArrow}>
                    <span
                      className={
                        ((this.state.sortTitle === key)
                          && this.state[`${key}Ascending`])
                          && `${theme.sortedAscending}`
                      }
                      onClick={() => this.sortAscending(key)}
                    />
                    <span
                      className={
                        ((this.state.sortTitle === key)
                          && this.state[`${key}Descending`])
                          && `${theme.sortedDescending}`
                      }
                      onClick={() => this.sortDescending(key)}
                    />
                  </div>
                )
                }
              </div>
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
    const { theme } = this.props;
    const { tableData } = this.state;
    return (
      <div className={theme.tableBody}>
        {
          tableData && tableData.map((eachData, index) => this.renderTableRow(eachData, index))
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
  sort: PropTypes.bool,
};

Table.defaultProps = {
  theme: defaultTheme,
  sort: false,
};

export default themr('CBTable', defaultTheme)(Table);

