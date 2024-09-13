import React from "react";
import App from "next/app";
import Head from "next/head";

import "@radix-ui/themes/styles.css"; // Add this line
import "../theme/theme.scss";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { Theme } from "@radix-ui/themes";

class MyApp extends App {
  componentDidMount() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <Head>
          <title>Lucas Lorenzo Pena</title>
        </Head>
        <AnimatePresence wait={true}>
          <Analytics />
          <Theme>
            <Component {...pageProps} key={router.route} />
          </Theme>
        </AnimatePresence>
      </>
    );
  }
}

export default MyApp;
