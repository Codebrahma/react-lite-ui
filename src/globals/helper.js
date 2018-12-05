/* eslint-disable import/prefer-default-export */
export const transitionEndEventName = () => {
  const el = document.createElement('div');

  const transEndEventNames = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend',
  };
  /* eslint-disable no-restricted-syntax */
  for (const name in transEndEventNames) {
    if (el.style[name] !== undefined) {
      return transEndEventNames[name];
    }
  }

  return false; // explicit for ie8
};
