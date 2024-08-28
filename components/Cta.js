import {cubicBezier, fadeInUp} from "../animations/animations";
import {motion, useAnimation} from "framer-motion";
import {useEffect, useState} from "react";
import Link from "next/link";
import {LightningBoltIcon, MagicWandIcon} from "@radix-ui/react-icons";
import style from './Cta.module.scss';


const pickRandom = (arr, count) => {
    let _arr = [...arr];
    return [...Array(count)].map(() => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]);
}

const descriptor = [
    "creative provocateur",
    "innovation mercenary",
    "R&D lead",
    "research scientist",
    "creative technologist",
    "fullstack growth engineer",
    "design strategist",
    "experience designer",
    "creative consultant",
    "creative director",
    "futurist",
    "systems designer",
];

const Cta = () => {
    const [open, setOpen] = useState(false);
    const [desc, _setDesc] = useState(descriptor[0]);
    const animationControls = useAnimation();

    useEffect(() => {
            const setDesc = () => {
                _setDesc(pickRandom(descriptor, 1)[0]);
            };

            const animateOpen = async () => {
                animationControls.start({
                    y: (open ? 0 : 100),
                    transition: {
                        delay: (open ? (0.25) : (3)),
                        duration: 0.25,
                        ease: cubicBezier
                    }
                }).then(() => {
                    setOpen(!open);
                    if (open === false) {
                        console.log({desc})
                        setDesc();
                    }
                });
            };
            animateOpen()
        }, [open, animationControls, setOpen, _setDesc, desc]
    )

    useEffect(() => {
        // console.log({desc})
    }, [desc])

    return (
        <motion.section variants={fadeInUp} className={style.Cta} id={'cta'}>
            <div>
                <div>
                    <h4>Hire me as your</h4>
                    <div>
                        <motion.h1 animate={animationControls}>{desc}&nbsp;</motion.h1>
                    </div>
                    <h4>in residence.</h4>
                </div>
                <br/><br/>
                <div>
                    <motion.div
                        whileHover={{scale: 1.05}}
                        transition={{duration: 0.125}}
                    >
                        <Link prefetch={false} href={'mailto:inquiry@lucaslorenzo.digital'} target={'_blank'}>
                            <p>Contact for availability <MagicWandIcon/></p>
                        </Link>
                    </motion.div>
                    <br/>
                    <motion.div
                        whileHover={{scale: 1.05}}
                        transition={{duration: 0.125}}
                    >
                        <Link prefetch={false} href={'https://docsend.dropbox.com/view/q89bz7u5e2qruekb'}
                              target={'_blank'}>
                            <p>Explore capabilities and offerings details <LightningBoltIcon/></p>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default Cta;