import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import '../theme/theme.scss';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react"

class MyApp extends App {
  componentDidMount(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  render(){
    const { Component, pageProps, router } = this.props;
    return(
        <>
          <Head>
              <title>Lucas Lorenzo Pena</title>
          </Head>
          <AnimatePresence exitBeforeEnter={true} >
            <Analytics />
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </>
    );
  }
}

export default MyApp;