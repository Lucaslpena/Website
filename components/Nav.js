import React, {Component } from 'react';
import styles from './Nav.module.scss';
const scrollTime = 500;
const scrollOffset = -150;

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <nav className={styles.Nav}>
        <div>
          <p className={styles.Link}>Lucas Lorenzo Pena</p>
        </div>
        <div>
          {/*<a>Selected Works</a>*/}
        </div>

      </nav>
    )
  }
}