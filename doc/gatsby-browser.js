/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.onPreRouteUpdate = ({ location }) => {
  if (window && typeof window.gtag === 'function') {
    window.gtag('config', 'UA-41862404-1', { page_path: location.pathname });
  }
};
