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
      expandedKeys: [],
    };
    this.expandedContentRef = {};
  }

  toggle = (keyValue) => {
    const { expandedKeys } = this.state;
    const { allowMultipleExpanded } = this.props;
    let updatedExpandedKeys = [...expandedKeys];
    if (allowMultipleExpanded) {
      if (updatedExpandedKeys.includes(keyValue)) {
        updatedExpandedKeys = updatedExpandedKeys.filter(key => key !== keyValue);
      } else {
        updatedExpandedKeys.push(keyValue);
      }
    } else {
      updatedExpandedKeys = expandedKeys.includes(keyValue) ? [] : [keyValue];
    }
    this.setState({ expandedKeys: updatedExpandedKeys });

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
    const { expandedKeys } = this.state;
    const iconProps = {
      className: classnames(theme.icon, theme['expand-icon'], theme.open),
    };
    return (
      <div>
        {data
          && data.map(item => (
            <div
              id="accordion-list"
              key={item.key}
              className={classnames(theme.itemWrapper, {
                [theme.noBorder]: borderless,
              })}
            >
              <div className={classnames(theme.item)}>
                {/*  eslint-disable jsx-a11y/no-static-element-interactions */
                /* eslint-disable jsx-a11y/click-events-have-key-events  */}
                <div
                  id="accordion-heading"
                  className={classnames(
                    theme.heading,
                    { [theme.headerActive]: expandedKeys.includes(item.key) },
                    headerClassName,
                  )}
                  onClick={() => this.toggle(item.key)}
                >
                  <FaAngleRight
                    {...iconProps}
                    className={classnames(
                      expandedKeys.includes(item.key) ? theme.open : theme.close,
                    )}
                  />

                  <p className={classnames(theme.headingText)}>{item[headerKey]}</p>
                </div>
                <div
                  id={expandedKeys.includes(item.key) ? 'content-element' : undefined}
                  ref={(el) => {
                    this.expandedContentRef[item.key] = el;
                  }}
                  className={classnames(
                    { [theme.hideContent]: !expandedKeys.includes(item.key) },
                    theme.content,
                  )}
                >
                  <p
                    className={classnames(
                      expandedKeys.includes(item.key)
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
  allowMultipleExpanded: PropTypes.bool,
  className: PropTypes.string,
  headerClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  borderless: PropTypes.bool,
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
