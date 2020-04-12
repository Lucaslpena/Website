import React, {Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './nav.scss';

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
      <nav>
        <div>
          <Link
            activeClass="active"
            to="banner"
            spy={true}
            smooth={true}
            offset={scrollOffset}
            duration= {scrollTime}
          >
            Lucas Lorenzo Pena
          </Link>

        </div>
        <div>
          {/*<a>Selected Works</a>*/}
        </div>
        <div>
          <Link
            activeClass="active"
            to="gigs"
            spy={true}
            smooth={true}
            offset={scrollOffset}
            duration= {scrollTime}
          >Work</Link>
        </div>
        <div>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={scrollOffset}
            duration= {scrollTime}
          >About</Link>
        </div>
        <div>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={scrollOffset}
            duration= {scrollTime}
          >Contact</Link>
        </div>
      </nav>
    )
  }
}