import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import defaultTheme from './theme.scss';

const DeleteIcon = ({ classes, handleClick }) => {
  function handleDeleteClick(e) {
    e.stopPropagation();
    return handleClick(e);
  }
  return (
    <button onClick={handleDeleteClick} className={classes}>
      <i className="icon-cross" />
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
    avatarElement && 'avatarMarginLeft',
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
      ),
    });
  } else if (typeof avatarElement === 'string') {
    avatar = <img src={avatarElement} alt="A" className={classnames(theme[`${size}Avatar`])} />;
  }

  /* DeleteIcon related block */
  let deleteIcon = null;
  if (handleDelete) {
    const customClasses = classnames(
      theme.deleteIcon,
      theme[size && `${size}Delete`],
      theme[!outlined ? color : `${color}Outlined`],
    );
    deleteIcon = <DeleteIcon classes={customClasses} handleClick={handleDelete} />;
  }

  return (
    <Element href="#" className={classes} {...props} onClick={Element === 'a' ? handleChipClick : () => {}}>
      { avatar }
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
};

DeleteIcon.defaultProps = {
  classes: '',
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
