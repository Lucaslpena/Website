import React from 'react';
import Link from 'next/link';
import styles from './inlinelink.module.scss';

const InlineLink = ({link, text, children}) => {
  return(
    <Link prefetch={false} href={link} target='_blank' style={{display: 'inline-block'}} className={styles.InlineLink}>
        {text}
        {children}
    </Link>);
}

export default InlineLink;