import React, {Component } from 'react';
import styles from './Nav.module.scss';
import {motion} from 'framer-motion';
const scrollTime = 500;
const scrollOffset = -150;

const Nav = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.0 }}
      className={styles.Nav}
    >
      <div>
        <p className={styles.Link}>Lucas Lorenzo Pena</p>
      </div>
      {/*<div>*/}
      {/*  <p className={styles.Link}><em>Significant Clients</em></p>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <p className={styles.Link}><em>Select Works</em></p>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <p className={styles.Link}><em>About</em></p>*/}
      {/*</div>*/}
    </motion.nav>
  )
}

export default Nav;