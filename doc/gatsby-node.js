/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const path = require('path');

// exports.onCreateWebpackConfig = ({
//   actions, stage,
// }) => {
//   const { setWebpackConfig } = actions;
//   const PRODUCTION = stage !== 'develop';

//   const sassLoader = PRODUCTION ?
//     'sass-loader' :
//     `${require.resolve('sass-loader')}?sourceMap`;

//   const styleLoader = [
//     'style-loader',
//     sassLoader,
//   ];

//   setWebpackConfig({
//     module: {
//       rules: [
//         {
//           test: /\.scss$/,
//           include: path.resolve(__dirname, './doc'),
//           use: styleLoader,
//         },
//       ],
//     },
//   });
// };
