const path = require('path');
const transformMarkdown = require('markdown-magic');
const travisBadgePlugin = require('markdown-magic-branch-badge');

const config = {
  transforms: {
    travisBadgePlugin,
  },
};

function callback(err) {
  if (err) {
    console.log(err);
    throw new Error('Error occured while updating readme.');
  }
  console.log('ReadME generated.');
}

const markdownPath = path.join(__dirname, '..', 'README.md');
transformMarkdown(markdownPath, config, callback);
