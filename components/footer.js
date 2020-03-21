import React, {Component } from 'react'
import Link from 'next/link'
import './footer.scss'

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { id, children } = this.props;
    return(
      <footer id={id}>
        { children }
      </footer>
    )
  }
}