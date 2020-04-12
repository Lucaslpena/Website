import React from 'react';
import Link from 'next/link';

import './inlinelink.scss';

function InlineLink(props) {
  return(
    <Link prefetch={false} href={props.link}>
      <a target='_blank' className={'InlineLink'}>
        {props.text}
      </a>
    </Link>);
}

export default InlineLink;