import Head from 'next/head';
import Normalize from 'react-normalize';
import '../styles.scss';
import { Fragment } from 'react';
import {Footer, Nav} from '../components';

const Home = () => (
  <div className={'container'}>
    <Normalize/>
    <Head>
      <title>Lucas Lorenzo Pena</title>
      <link rel="icon" href="/favicon.ico"/>
      <link href="https://fonts.googleapis.com/css2?family=Palanquin:wght@500&family=Roboto&display=swap"
            rel="stylesheet" />
    </Head>
    <Nav />

    <section>
      <div id={'banner'}>
        <h1>I help teams research, design, and deploy digital interactions of the future</h1>
        {/*<h2>I help teams research, design, and deploy digital interactions of the future</h2>*/}
        {/*<h3>I help teams research, design, and deploy digital interactions of the future</h3>*/}
        {/*<h4>I help teams research, design, and deploy digital interactions of the future</h4>*/}
      </div>
    </section>
    {/*<section>*/}
    {/*  <div id={'selectedWorks'}>*/}
    {/*  </div>*/}
    {/*</section>*/}
    <section>
      <div id={'about'}>
        <h3>About</h3>
        <p>I am a Creative Technologist (Full-Stack Software Engineer & UX Designer) and lecturer currently fascinated with:</p>
        <ul>
          <li>the symbiosis between humans and artificial intelligence as a means to empower new forms of decision making</li>
          <li>the impact digital experiences can have on education and upskilling individuals and communities</li>
          <li>the future of our social and urban spaces</li>
        </ul>

      </div>
    </section>
    <section>
      <div id={'timeline'}>
        <div className={'period'}>
          <h3>Present:</h3>
          <ul>
            <li>founding a strategic R&D consultancy with Cece MoSze Tham & Mark B&#252;nger</li>
            <li>designing and developing platforms with Krashidbuilt</li>
            <li>creating the future of a kitchen for Milan Design Week</li>
            <li>lecturing "Designing with Extended Intelligence" for MDEF in IAAC/FabLab</li>
          </ul>
        </div>

        <div className={'period'} >
          <h3>Past:</h3>
          <div>
            <ul>
              <li>prototyped the future if autonomous commerce with Alpha</li>
              <li>lectured "Atlas of Weak Signals" for MDEF in IAAC/FabLab</li>
              <li>researched social cognition and trust with SPECS</li>
              <li>lead creative technology at Ideas For Change</li>
              <li>developed creative installations with VIMOD</li>
              <li>developed an open source education STEM platform with MIT </li>
              <li>presented at the EU Commission as an expert of designing blockchain services</li>
              <li>investigated governance system of health-care data with Triem</li>
              <li>co-designed and developed open sourced experiences for Making Sense</li>
              <li>was in growing startup... then left</li>
              <li>had a startup... it failed</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
    <Footer>
      <section>
        <div id={'contact'}>
        </div>
      </section>
    </Footer>

  </div>
);

export default Home
