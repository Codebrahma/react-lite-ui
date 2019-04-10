import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import { FaAngleRight } from 'react-icons/fa';
import classnames from 'classnames';
import defaultTheme from './theme.module.scss';
import '../globals/fonts.scss';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContentList: [],
    };
    this.expandedContentRef = {};
  }

  toggle = (keyValue) => {
    const { showContentList } = this.state;
    const { allowMultipleExpanded } = this.props;
    let updatedShowKey = [...showContentList];
    if (allowMultipleExpanded) {
      if (updatedShowKey.includes(keyValue)) {
        updatedShowKey = updatedShowKey.filter(key => key !== keyValue);
      } else {
        updatedShowKey.push(keyValue);
      }
    } else {
      updatedShowKey = showContentList.includes(keyValue) ? [] : [keyValue];
    }
    this.setState({ showContentList: updatedShowKey });

    if (this.expandedContentRef[keyValue].clientHeight) {
      this.expandedContentRef[keyValue].style.height = 0;
    } else {
      const wrapper = this.expandedContentRef[keyValue].firstChild;
      this.expandedContentRef[keyValue].style.height = `${
        wrapper.clientHeight
      }px`;
    }
  };

  renderContent = () => {
    const {
      theme,
      headerKey,
      contentKey,
      borderless,
      headerClassName,
      contentClassName,
      data,
    } = this.props;
    const { showContentList } = this.state;
    const iconProps = {
      className: classnames(theme.icon, theme['expand-icon'], theme.open),
    };
    return (
      <div>
        {data
          && data.map(item => (
            <div
              key={item.key}
              className={classnames(theme.itemWrapper, {
                [theme.noBorder]: borderless,
              })}
            >
              <div className={classnames(theme.item)}>
                {/*  eslint-disable jsx-a11y/no-static-element-interactions */
                /* eslint-disable jsx-a11y/click-events-have-key-events  */}
                <div
                  className={classnames(
                    theme.heading,
                    { [theme.headerActive]: showContentList.includes(item.key) },
                    headerClassName,
                  )}
                  onClick={() => this.toggle(item.key)}
                >
                  <FaAngleRight
                    {...iconProps}
                    className={classnames(
                      showContentList.includes(item.key) ? theme.open : theme.close,
                    )}
                  />

                  <p>{item[headerKey]}</p>
                </div>
                <div
                  ref={(el) => {
                    this.expandedContentRef[item.key] = el;
                  }}
                  className={classnames(
                    { [theme.hideContent]: !showContentList.includes(item.key) },
                    theme.content,
                  )}
                >
                  <p
                    className={classnames(
                      showContentList.includes(item.key)
                        ? [theme.contentTextOpen]
                        : [theme.contentTextClose],
                      contentClassName,
                      theme.contentPadding,
                    )}
                  >
                    {item[contentKey]}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  };

  render() {
    const { theme, borderless, className } = this.props;
    return (
      <div
        className={classnames(
          theme.accordionBody,
          { [theme.noBorder]: borderless },
          className,
        )}
      >
        {this.renderContent()}
      </div>
    );
  }
}

Accordion.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array]).isRequired,
  headerKey: PropTypes.string,
  contentKey: PropTypes.string,
  allowMultipleExpanded: PropTypes.string,
  className: PropTypes.string,
  headerClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  borderless: PropTypes.string,
  theme: PropTypes.shape({
    accordionBody: PropTypes.string,
  }),
};
Accordion.defaultProps = {
  theme: defaultTheme,
  headerKey: 'header',
  contentKey: 'content',
  allowMultipleExpanded: false,
  className: '',
  headerClassName: '',
  contentClassName: '',
  borderless: false,
};
export default themr('CBAccordion', defaultTheme)(Accordion);
