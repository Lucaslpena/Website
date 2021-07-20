import React from 'react';
import Link from 'next/link';

function InlineLink(props) {
  return(
    <Link prefetch={false} href={props.link}>
      <a target='_blank' style={{display: 'inline-block'}}>
        {props.text}
      </a>
    </Link>);
}

export default InlineLink;