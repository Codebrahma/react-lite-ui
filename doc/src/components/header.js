import React from 'react'
import { Link } from 'gatsby'
import styles from './styles.scss'

import triangle from './triangle.svg';
const Header = ({ siteTitle }) => (
  <div className={styles.navbar}>
    <img src={triangle} />
  </div>
)

export default Header
