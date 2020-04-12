import React from 'react';
import App from 'next/app';
import { AnimatePresence } from 'framer-motion';

class MyApp extends App {
  componentDidMount(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  render(){
    const { Component, pageProps, router } = this.props;
    return(
      <AnimatePresence exitBeforeEnter={true} >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      );
  }
}

export default MyApp;
