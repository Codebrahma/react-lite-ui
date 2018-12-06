/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Navbar from '../../../src/navbar';
import liteLogo from '../images/match.svg';
import theme from './theme.scss';

const Header = ({ location }) => (
  <Navbar theme={theme} className={`navbar${location.pathname !== '/' ? ' navbar-extended' : ''}`} position="fixed" flat title={<Link to="/">React Lite UI</Link>} leftIcon={<Link to="/"><img src={liteLogo} alt="navbar-left-logo" /></Link>}>
    <Link to="/documentation" activeClassName="active-link">Documentation</Link>
    <Link to="/usage" activeClassName="active-link">Usage</Link>
    <Link to="/playground" activeClassName="active-link" >Playground</Link>
    <a href="https://www.github.com/Codebrahma/react-lite-ui/" >
      <svg xmlns="http://www.w3.org/2000/svg" width="69" height="23" viewBox="0 0 69 23">
        <g fill="#FFF" fillRule="evenodd">
          <text fontFamily="Roboto-Bold, Roboto" fontSize="20" transform="translate(29 -1)">
            <tspan x="0" y="19">Fork</tspan>
          </text>
          <path fillRule="nonzero" d="M11.5 0C5.184 0 0 5.184 0 11.5 0 16.89 3.782 21.786 8.805 23v-3.805a2.813 2.813 0 0 1-1.462-.037c-.68-.2-1.232-.653-1.642-1.343-.262-.441-.725-.92-1.208-.884l-.118-1.343c1.044-.09 1.948.637 2.485 1.538.238.4.512.636.864.74.34.1.706.052 1.131-.099.107-.852.498-1.17.793-1.62-2.996-.448-4.19-2.037-4.663-3.29-.628-1.666-.291-3.747.82-5.062.02-.025.06-.092.045-.14-.51-1.537.11-2.81.134-2.944.587.174.683-.175 2.552.96l.323.195c.135.08.092.034.227.024a9.76 9.76 0 0 1 2.414-.34c.817.011 1.634.128 2.447.349l.104.01c-.009-.001.029-.006.092-.044 2.334-1.414 2.25-.952 2.877-1.155.022.135.634 1.427.13 2.946-.067.209 2.025 2.125.865 5.2-.474 1.254-1.667 2.843-4.663 3.29v.001c.384.585.846.896.843 2.104V23C19.218 21.786 23 16.89 23 11.5 23 5.184 17.817 0 11.5 0z" />
        </g>
      </svg>
    </a>
  </Navbar>
);


Header.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Header;
