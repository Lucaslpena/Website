import React, {useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import {cubicBezier, slideUp, staggerContent} from '../animations/animations';

import style from './Footer.module.scss';


const pickRandom = (arr,count) => {
  let _arr = [...arr];
  return[...Array(count)].map( ()=> _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0] );
}

const messages = {
  linkDescriptors: ['Development', 'Strategy', 'Consulting', 'Design', 'Research', 'Prototyping'],
  meDescriptors: ['Cognitive', 'Creative', 'Experiential', 'Social', 'Interactive', 'Emergent', 'Innovative'],
  aboutDescriptor: ['Creative Technologist', 'FullStack Engineer', 'Lecturer', 'Consultant']
};

const data = [
  {link: 'mailto:inquiry@lucaslorenzo.digital', description: 'Mail'},
  {link: 'https://twitter.com/digitalfaust_', description: 'Twitter'},
  {link: 'https://github.com/Lucaslpena', description: 'GitHub'},
  {link: 'https://www.linkedin.com/in/lucaslpena/', description: 'LinkedIn'},
  {link: 'https://www.traverse-in.space/', description: 'Blog'},
  {link: 'https://www.instagram.com/digital.faust/', description: 'Instagram'}
]

function Footer(props){
  const [open, setOpen] = useState(false);
  const [msg, _setMessage] = useState([
    messages.linkDescriptors[0],
    messages.linkDescriptors[1],
    messages.linkDescriptors[2],
    messages.linkDescriptors[3],
    messages.linkDescriptors[4],
    messages.linkDescriptors[5],
  ]);
  const footerControls = useAnimation();

  useEffect(() => {
    const setMessage = () => {
      _setMessage(pickRandom(messages.linkDescriptors, 6));
    };

    const animateOpen = async () => {
      footerControls.start(i => ({
        y: (open ? 0 : 200),
        transition: {
          delay: ( open ? (i * 0.25) : (2 + i * 0.25)),
          duration: .75,
          ease: cubicBezier
        }
      })).then(() => {
        setOpen(!open);
        if(open === false) {
          // console.log({msg})
          setMessage();
        }
      });
    };

    animateOpen();
  }, [open, footerControls, setOpen, _setMessage]);

  const { id, children } = props;
  return(
    <footer className={style.Footer}>
      { children }

      <section className={style.contact}>
        <div className={'contact-wrapper'} >

          { data.map( (obj, i) =>
            <div className={style.container} key={i}>
              <Link prefetch={false} href={obj.link} target='_blank'>
                  <div className={style.description}>
                    <motion.em
                      // variants={slideUp}
                      // ----custom={0} animate={footerControls}
                      // onUpdate={(bl) => {console.log('updated')}}
                      custom={i}
                      animate={footerControls}
                    >
                      {msg[i]}
                    </motion.em>
                  </div>
                  <div className={style.label}>
                    <em>{obj.description}</em>
                  </div>
              </Link>
            </div>
          )}
        </div>
      </section>
    </footer>
  )
}

export default Footer;