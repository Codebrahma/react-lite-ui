import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import defaultTheme from './theme.scss';

const DeleteIcon = ({classes, handleClick}) => (
  <button onClick={handleClick} className={classes}>X</button>
)

const Chip = ({
  theme,
  label,
  size,
  color,
  avatar: avatarElement,
  outlined,
  handleDelete,
  ...props
}) => {
  const classes = classnames(theme.chip, theme[size],
    theme[outlined ? `${color}Outlined` : color],
  )
  /* Avatar related block */
  let avatar = null;
  if(avatarElement && React.isValidElement(avatarElement)) {
    avatar = React.cloneElement(avatarElement, {
      className: classnames(theme.avatar, avatarElement.props.className,
        theme[`${color}Avatar`]
      )
    })
  }

  /* DeleteIcon related block */
  let deleteIcon = null;
  if(handleDelete) {
    const customClasses = classnames(theme.deleteIcon,
        theme[size && `${size}Delete`],
        theme[outlined ? color : `${color}Outlined`]
    )
    deleteIcon =  <DeleteIcon classes={customClasses} handleClick={handleDelete}/>
  }

  return (
    <div href='#' className={classes} {...props}>
      { avatar }
      <span className={theme.label}>{ label }</span>
      { deleteIcon }
    </div>
  )
}

Chip.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  outlined: PropTypes.bool,
  handleDelete: PropTypes.func,
};

Chip.defaultProps = {
  label: 'default chip',
  color: 'secondary',
  size: 'medium',
};

export default themr('CBChips', defaultTheme)(Chip);