/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
      items: [],
    };
    this.expandedContentRef = {};
  }

  componentDidMount() {
    const { items } = this.props;
    let tempArr = [];
    const arrRandom = [];
    items.forEach((item) => {
      let num = Math.random() * 1000000;
      if (arrRandom.includes(num)) {
        while (arrRandom.includes(num) !== false) {
          num = Math.random() * 1000000;
        }
      }
      arrRandom.push(num);
      tempArr = [...tempArr, { ...item, key: num, show: false }];
    });
    this.setState({ items: tempArr });
  }

  toggle = (keyValue, showValue) => {
    const { items } = this.state;
    let updatedItems = [];
    items.forEach((item) => {
      if (item.key === keyValue) {
        const updatedShow = { ...item, show: !showValue };
        updatedItems = [...updatedItems, updatedShow];
      } else {
        const updatedShow = { ...item, show: false };
        updatedItems = [...updatedItems, updatedShow];
      }
    });
    this.setState({ items: updatedItems });
    if (this.expandedContentRef[keyValue].clientHeight) {
      this.expandedContentRef[keyValue].style.height = 0;
    } else {
      const wrapper = this.expandedContentRef[keyValue].firstChild;
      this.expandedContentRef[keyValue].style.height = `${
        wrapper.clientHeight
      }px`;
    }
  };

  randerContent = () => {
    const {
      theme,
      headerKey,
      contentKey,
      borderless,
      headerClassName,
      contentClassName,
    } = this.props;
    const { items } = this.state;
    const iconProps = {
      className: classnames(theme.icon, theme['expand-icon'], theme.open),
    };
    return (
      <div>
        {items
          && items.map(item => (
            <div
              key={item.key}
              className={classnames(theme.itemWrapper, {
                [theme.noBorder]: borderless,
              })}
            >
              <div className={classnames(theme.item)}>
                <div
                  className={classnames(
                    theme.heading,
                    { [theme.color]: item.show },
                    headerClassName,
                  )}
                  onClick={() => this.toggle(item.key, item.show)}
                >
                  <FaAngleRight
                    {...iconProps}
                    className={classnames(item.show ? theme.open : theme.close)}
                  />

                  <p>{item[headerKey]}</p>
                </div>
                <div
                  ref={(el) => {
                    this.expandedContentRef[item.key] = el;
                  }}
                  className={classnames(
                    { [theme.hideContent]: !item.show },
                    theme.content,
                    contentClassName,
                  )}
                >
                  <p className={classnames(theme.contentText)}>
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
        {this.randerContent()}
      </div>
    );
  }
}

Accordion.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array]).isRequired,
  headerKey: PropTypes.string,
  contentKey: PropTypes.string,
  theme: PropTypes.shape({
    accordionBody: PropTypes.string,
  }),
};
Accordion.defaultProps = {
  theme: defaultTheme,
  headerKey: 'heading',
  contentKey: 'content',
};
export default themr('CBAccordion', defaultTheme)(Accordion);
