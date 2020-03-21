import React, {Component } from 'react';
import PropTypes from 'prop-types';
import { Link, animateScroll as scroll } from 'react-scroll';
import './nav.scss';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <nav>
        <div>
          <a>Lucas Lorenzo Pena</a>
        </div>
        <div>
          {/*<a>Selected Works</a>*/}
        </div>
        <div>
          <a>Current & Past Gigs</a>
        </div>
        <div>
          <a>About</a>
        </div>
        <div>
          <a>Contact</a>
        </div>
      </nav>
    )
  }
}