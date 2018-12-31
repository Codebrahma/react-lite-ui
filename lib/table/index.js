/* eslint-disable react/destructuring-assignment */
import React from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { FaArrowDown } from 'react-icons/fa';
import PropTypes from 'prop-types';
import defaultTheme from './theme.module.scss';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: props.data,
    };
  }

  componentDidMount() {
    const { columns } = this.props;
    this.setState({
      sortTitle: columns[0].key,
      [`${columns[0].key}Ascending`]: true,
    });
  }

  componentDidUpdate() {
    const { data } = this.props;
    const { tableData } = this.state;
    if (data !== tableData) {
      this.setState({ // eslint-disable-line
        tableData: data,
      });
    }
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

  /*  eslint-disable jsx-a11y/click-events-have-key-events  */
  /*  eslint-disable jsx-a11y/no-static-element-interactions */
  renderSortArrow = (key) => {
    const { sortTitle } = this.state;
    const { theme } = this.props;
    const isCurrentKey = sortTitle === key;
    return (
      <div className={theme.sortArrow} id="table-sort">
        <span
          className={
            // eslint-disable-next-line react/destructuring-assignment
            (isCurrentKey && this.state[`${key}Ascending`])
              ? `${theme.sortedAscending} sortedAscending`
              : null
          }
          onClick={() => this.sortAscending(key)}
        />
        <span
          className={
            // eslint-disable-next-line react/destructuring-assignment
            (isCurrentKey && this.state[`${key}Descending`])
              ? `${theme.sortedDescending} sortedDescending`
              : null
          }
          onClick={() => this.sortDescending(key)}
        />
      </div>
    );
  }

  handleTitleSort = (key) => {
    // eslint-disable-next-line react/destructuring-assignment
    this.setState(prevState => ({
      [`${key}TitleToggle`]: !prevState[[`${key}TitleToggle`]],
    }));
    if (this.state[`${key}TitleToggle`]) {
      this.sortAscending(key);
    } else {
      this.sortDescending(key);
    }
  }

  renderArrowIcon = (isCurrentKey, key) => {
    const { theme } = this.props;
    return (
      <FaArrowDown
        className={classnames(
          theme.arrow,
          !isCurrentKey && theme.hidden,
          this.state[`${key}Ascending`] ? theme.downArrow : theme.upArrow,
        )}
      />
    );
  }

  renderSortableTitle = (title, key) => {
    const { sortTitle } = this.state;
    const { theme } = this.props;
    const isCurrentKey = sortTitle === key;
    return (
      <div
        className={theme.sortableTitle}
        onClick={() => this.handleTitleSort(key)}
      >
        {title}
        <span className={theme.sortableTitleIcon}>
          {this.renderArrowIcon(isCurrentKey, key)}
        </span>
      </div>
    );
  }

  /*
   *  the table header content will be rendered from accepting columns prop as array,
   *  the number of columns in table is directly proportional to
   *  length of columns array from prop
  */
  renderTableHeader = () => {
    const {
      columns, theme, sort, sortByTitle,
    } = this.props;
    return (
      <div className={theme.tableHeader} aria-label="table-header">
        { columns && columns.map(({
          key, title, colWidth, ...other
        }) => (
          <div
            style={{ width: colWidth || 'fit-content' }}
            key={`${key}-${title}`}
            className={theme.tableHeaderCell}
            {...other}
          >
            <div className={theme.tableHeadCellContent}>
              {sortByTitle ? this.renderSortableTitle(title, key) : title}
              {sort && this.renderSortArrow(key)}
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
      <div className={theme.tableBodyRow} key={rowKey} id="table-row">
        {
          columns && columns.map(({ title, key }) => (
            <div
              key={`${title}-${eachData[key]}`}
              className={theme.tableBodyCell}
            >
              <div className={theme.tableBodyCellContent}>
                {eachData[key]}
              </div>
            </div>
          ))
        }
      </div>
    );
  }

  /*
   *  This function renders the body content of the  table.
   *  Number of rows of table is directly proportional to length
   *  of data array from props.
   *  data is iterated to pass every item as argument to renderTableRow function.
  */
  renderTableBody = () => {
    const { theme } = this.props;
    const { tableData } = this.state;
    return (
      <div className={theme.tableBody} aria-label="table-body">
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
        <div className={theme.table} aria-label="table">
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
  sortByTitle: PropTypes.bool,
};

Table.defaultProps = {
  theme: defaultTheme,
  sort: false,
  sortByTitle: false,
};

export default themr('CBTable', defaultTheme)(Table);
