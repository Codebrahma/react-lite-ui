import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';
import Navbar from '../../../src/navbar';
import liteLogo from '../images/match.svg';
import './styles.scss';
import theme from './theme.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Navbar theme={theme} className="navbar" position="fixed" flat title="React Lite UI" leftIcon={liteLogo}>
          <Link to="/documentation" >Documentation</Link>
          <Link to="/usage" >Usage</Link>
          <Link to="/playground" >Playground</Link>
        </Navbar>
        <div id="layout">
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
