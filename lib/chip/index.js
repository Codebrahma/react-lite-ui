import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import { IoMdClose } from 'react-icons/io';
import defaultTheme from './theme.module.scss';

const DeleteIcon = ({ classes, handleClick, theme }) => {
  function handleDeleteClick(e) {
    e.stopPropagation();
    return handleClick(e);
  }
  return (
    <button type="button" onClick={handleDeleteClick} className={classes}>
      <IoMdClose className={classnames(theme['icon-cross'], 'icon-cross')} />
    </button>
  );
};

const Chip = ({
  theme,
  label,
  size,
  color,
  avatar: avatarElement,
  outlined,
  handleDelete,
  handleChipClick,
  className,
  ...props
}) => {
  const Element = !handleChipClick ? 'div' : 'a';

  const classes = classnames(
    theme.chip,
    theme[size],
    theme[outlined ? `${color}Outlined` : color],
    avatarElement && `${theme.avatarMarginLeft} avatarMarginLeft`,
    { [theme.clickable]: Element === 'a' },
    className,
  );
  /* Avatar related block */
  let avatar = null;
  if (avatarElement && React.isValidElement(avatarElement)) {
    avatar = React.cloneElement(avatarElement, {
      className: classnames(
        avatarElement.props.className,
        theme[`${size}Avatar`],
        theme['chip-avatar'],
      ),
    });
  } else if (typeof avatarElement === 'string') {
    avatar = <img src={avatarElement} alt="A" className={classnames(theme[`${size}Avatar`], theme['chip-avatar'])} />;
  }

  /* DeleteIcon related block */
  let deleteIcon = null;
  if (handleDelete) {
    const customClasses = classnames(
      theme.deleteIcon,
      theme[size && `${size}Delete`],
      theme[!outlined ? color : `${color}Outlined`],
    );
    deleteIcon = <DeleteIcon classes={customClasses} handleClick={handleDelete} theme={theme} />;
  }

  return (
    <Element href="#" className={classes} {...props} onClick={Element === 'a' ? handleChipClick : () => {}}>
      { avatar !== null ? (
        <div className={classnames(theme[`${size}Avatar`], theme['chip-avatar'])}>
          { avatar }
        </div>
      ) : null }
      <span className={theme.label}>{ label }</span>
      { deleteIcon }
    </Element>
  );
};

Chip.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  outlined: PropTypes.bool,
  handleDelete: PropTypes.func,
  handleChipClick: PropTypes.func,
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  classes: PropTypes.string,
  theme: PropTypes.oneOfType([PropTypes.object]),
};

DeleteIcon.propTypes = {
  classes: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  theme: PropTypes.oneOfType([PropTypes.object]),
};

DeleteIcon.defaultProps = {
  classes: '',
  theme: defaultTheme,
};

Chip.defaultProps = {
  label: 'default chip',
  color: 'secondary',
  size: 'medium',
  outlined: false,
  handleDelete: null,
  handleChipClick: null,
  avatar: null,
  className: '',
  classes: '',
  theme: defaultTheme,
};

export default themr('CBChips', defaultTheme)(Chip);
