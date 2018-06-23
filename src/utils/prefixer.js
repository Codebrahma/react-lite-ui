const WEBKIT = 'Webkit';
const MICROSOFT = 'Ms';

const properties = {
  transform: [WEBKIT, MICROSOFT],
};

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substr(1);
}

function getPrefixes(property, value) {
  return properties[property].reduce((acc, item) => {
    acc[`${item}${capitalize(property)}`] = value; // eslint-disable-line no-param-reassign
    return acc;
  }, {});
}

function addPrefixesTo(style, property, value) {
  const vendor = getPrefixes(property, value);
  for (const prefix in vendor) { // eslint-disable-line no-restricted-syntax
    if ({}.hasOwnProperty.call(vendor, prefix)) {
      style[prefix] = vendor[prefix]; // eslint-disable-line no-param-reassign
    }
  }

  return style;
}

function prefixer(style, defaultValue = {}) {
  const newStyle = defaultValue;
  for (const property in style) { // eslint-disable-line no-restricted-syntax
    if ({}.hasOwnProperty.call(style, property)) {
      newStyle[property] = style[property];
      if (properties[property]) {
        addPrefixesTo(newStyle, property, style[property]);
      }
    }
  }

  return newStyle;
}

export default prefixer;
