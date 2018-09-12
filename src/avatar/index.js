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
  title,
  ...other
}) => {
  const classes = classnames(theme.avatar, className);

  return (
    <div className={classes} {...other}>
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
        {children}
      </div>
    </div>
  );
};

Avatar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.object,
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
};

Avatar.defaultProps = {
  children: null,
  className: '',
  theme: defaultTheme,
  image: null,
  alt: '',
  title: '',
};

export default themr('CBAvatar', defaultTheme)(Avatar);
