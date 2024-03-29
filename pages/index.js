import Head from 'next/head';
import {Footer, Nav, InlineLink } from '../components';
import { motion } from 'framer-motion';
import {fadeInUp, slideUp, staggerBanner, staggerContent} from '../animations/animations';
import Link from 'next/link';
import { FileTextIcon } from '@radix-ui/react-icons'
import Logos from "../components/Logos";

export default function Home() {

  return(
    <>
      <Head>
        <title>Lucas Lorenzo Pena</title>
        <link rel="icon" href="/favicon.ico"/>
        <link href="https://fonts.googleapis.com/css2?family=Palanquin:wght@500&family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      <Nav />
      <div className={'pseudo-background'}>
      </ div>
      <motion.div className={'container'} initial='initial' animate='animate' variants={staggerContent}>
        <motion.section id={'banner'} initial='initial' animate='animate' variants={staggerBanner}>
          <div>
            <h1>
              <div><motion.h1 variants={slideUp}>I help teams, and students</motion.h1></div>
              <div><motion.h1 variants={slideUp}>research, design, and produce</motion.h1></div>
              <div><motion.h1 variants={slideUp}>where digital interactions</motion.h1></div>
              <div><motion.h1 variants={slideUp}>meet future systems</motion.h1></div>
            </h1>
          </div>
        </motion.section>
        <motion.section variants={fadeInUp} id={'gigs'}>
          <div>
            <h3>Present:</h3>
            <ul>
              <li><InlineLink link={'/blog'} text={'exploring the landscape of tech, design, and social systems'}/> and highlighting some here <InlineLink link={'https://www.traverse-in.space/'} text={'Traverse In Space'}/></li>
              <li>lecturing &quot;Designing with Extended Intelligence&quot; for <InlineLink link={'https://iaac.net/educational-programmes/masters-programmes/master-in-design-for-emergent-futures-mdef/'} text={'MDEF in IAAC/FabLab'}/></li>
              <li>lecturing &quot;Smart Objects&quot; for Design Management Students in IED / University of Westminster</li>
            </ul>
          </div>
          <div>
            <h3>Past:</h3>
            <div>
              <ul>
                <li>researching and developing prototypes with <InlineLink link={'https://www.amazon.jobs/en/teams/brand-innovation-lab'} text={'Amazon, Brand Innovation Lab'}/> in EU for multinational Technology and Fashion corporates</li>
                <li>founded <InlineLink link={'https://www.linkedin.com/company/futuritystudio/'} text={'a strategic futuring as a service and R&D consultancy'}/> with Cece MoSze Tham & Mark B&#252;nger</li>
                <li>designing and developing react platforms with <InlineLink link={'https://www.krashidbuilt.com/'} text={'Krashidbuilt'}/></li>
                <li>created the future of a kitchen installation for Dutch Design Week with <InlineLink link={'https://weird.fyi'} text={'W3}RD'}/></li>
                <li>prototyped the future if autonomous commerce with <InlineLink link={'https://www.alpha.company/'} text={'Alpha - Telefonica'}/> (Now Koa Health)</li>
                <li>lectured &quot;The Atlas of Weak Signals&quot; for <InlineLink link={'https://iaac.net/educational-programmes/masters-programmes/master-in-design-for-emergent-futures-mdef/'} text={'MDEF in IAAC / FabLab Barcelona'}/></li>
                <li>researched social cognition and trust at <InlineLink link={'https://specs-lab.com/'} text={'SPECS'}/></li>
                <li>lead creative technology at <InlineLink link={'https://www.ideasforchange.com/'} text={'IdeasForChange'}/></li>
                <li>developed creative installations with <InlineLink link={'http://vimod.net/'} text={'VIMOD'}/></li>
                <li>developed an open-source education STEM platform with <InlineLink link={'https://fabfoundation.org/'} text={'MIT / Fab Foundation'}/></li>
                <li>presented at and recognized by the <InlineLink link={'https://blogs.ec.europa.eu/eupolicylab/portfolios/blockchain4eu/'} text={'EU Commission'}/> as an expert designer of blockchain services</li>
                <li>co-designed and developed open sourced onboarding experiences for <InlineLink link={'http://making-sense.eu/'} text={'Making Sense EU'}/></li>
                <li>was in growing <InlineLink link={'https://www.theskimm.com/'} text={'startup'}/>, realized design is important... then left</li>
                <li>had a startup ... it failed</li>
              </ul>
            </div>
          </div>
        </motion.section>
        <motion.section variants={fadeInUp} id={'logos'}>
          <h3>Significant Clients/Collaborations:</h3>
          <Logos />
        </motion.section>
        <motion.section variants={fadeInUp} id={'about'}>
          <div >
            <h3>About:</h3>
            <div>
              <p>I am currently fascinated with</p>
              <ul>
                <li>the symbiosis between humans and artificial intelligence as a means to empower new forms of decision making</li>
                <li>the future of social systems and urban spaces</li>
                <li>ideation processees and value creation as a creative faculty</li>
              </ul>
              <div className={'academia'}>
                <div>
                  <p>I have a thing for academia</p>
                  <ul>
                    <li>M. S. Cognitive Science & Interactive Media</li>
                    <li>M. A. Interactive Application Design</li>
                    <li>B. S. Computer Science</li>
                    <li>B. S. Criminology</li>
                  </ul>
                </div>
                <div>
                  <p>...which has led to some publications</p>
                  <ul>
                    <li>
                      <Link prefetch={false} href={'http://www.springer.com/cda/content/document/cda_downloaddocument/9783319702834-c2.pdf?SGWID=0-0-45-1623760-p181236024'}>
                        <a target='_blank'>
                          Onboarding Communities to the IoT
                        </a>
                      </Link>
                    </li>
                    {/*<li>*/}
                    {/*  <Link prefetch={false} href={'https://www.researchgate.net/publication/327700870_Towards_a_Conceptual_Space_of_Trust_in_the_Social_Neuroscience_of_Consciousness'}>*/}
                    {/*    <a target='_blank'>*/}
                    {/*      Towards a Conceptual Space of Trust in the Social Neuroscience of Consciousness*/}
                    {/*    </a>*/}
                    {/*  </Link>*/}
                    {/*</li>*/}
                  </ul>
                </div>
              </div>
              <div className={'skills'}>
                <p>I have been solutioning professionally for 8 years and during that time I have developed these skills:</p>
                <ul>
                  <li>Research: Cognitive Science, Human-Computer Interaction, Civic Technology</li>
                  <li>Design: Futuring & Innovation Strategy, Speculative Design, System Design, UX, UI, Participatory Design</li>
                  <li>Full-Stack: React, HTML, CSS, JavaScript, Node.js, PostgreSQL, MySQL, AWS, Docker</li>
                  <li>Machine Learning: Python, Jupyter</li>
                  <li>IoT Technologies: Raspberry Pi, Arduino, Processing</li>
                </ul>
              </div>
              <br />
              <div>
                <InlineLink
                  link={'https://drive.google.com/file/d/1181kssjEEXGoXoCfs0vj5wvfkPjhGTSZ/view?usp=sharing'}
                  text={'Want more details? Checkout my CV'}>
                  <FileTextIcon />
                </InlineLink>
                <InlineLink
                    link={'https://drive.google.com/file/d/108tjL44lSHeYYPcfu44ILxkFVZ2BUepT/view?usp=sharing'}
                    text={'...and my capabilities deck'}>
                  <FileTextIcon />
                </InlineLink>
              </div>
            </div>
          </div>
        </motion.section>
        <Footer />
      </motion.div>
    </>
  )
}