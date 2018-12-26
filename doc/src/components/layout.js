/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';

import './styles.scss';
import Header from './header';

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
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            { name: 'google-site-verification', content: 'TjZCWzGGmOI0ObQL9a4VYLWjcfh97hFWJgCIalrarNA' },
            { name: 'google-site-verification', content: 'MEXUwbWS3rNOj0kzZRJhmZRsZO8adSgFgnJp7R_TJBk' },
          ]}
        >
          <html lang="en" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-41862404-5" />
          <script>
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
          
            gtag('config', 'UA-41862404-1');`}
          </script>
        </Helmet>
        <Location>
          {({ location }) => <Header location={location} />}
        </Location>
        <div id="layout">
          {children}
        </div>
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
