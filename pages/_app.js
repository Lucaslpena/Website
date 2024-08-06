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
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link rel="icon" href="/favicon.ico"/>
            <link href="https://fonts.googleapis.com/css2?family=Palanquin:wght@500&family=Roboto&display=swap" rel="stylesheet" />
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