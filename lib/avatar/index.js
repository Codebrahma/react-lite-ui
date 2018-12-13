import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import defaultTheme from './theme.scss';

const Avatar = ({
  children,
  className,
  theme,
  image,
  alt,
  bgColor,
  alphabet,
  ...other
}) => {
  const classes = classnames(theme.avatar, theme[bgColor], className);

  return (
    <div className={classes} id="avatar" {...other}>
      {
        typeof image === 'string' ? (
          <img
            alt={alt}
            className={theme.image}
            src={image}
          />
        ) : null
      }
      <div className={theme.avatarContent}>
        { alphabet || children }
      </div>
    </div>
  );
};

Avatar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.oneOfType([PropTypes.object]),
  image: PropTypes.string,
  alt: PropTypes.string,
  bgColor: PropTypes.string,
  alphabet: PropTypes.string,
};

Avatar.defaultProps = {
  children: null,
  className: '',
  theme: defaultTheme,
  image: null,
  alt: '',
  bgColor: 'darkGrey',
  alphabet: '',
};

export default themr('CBAvatar', defaultTheme)(Avatar);
