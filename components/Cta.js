import {cubicBezier, fadeInUp, staggerContent} from "../animations/animations";
import {motion, useAnimation} from "framer-motion";
import {useEffect, useState} from "react";
import Link from "next/link";
import {LightningBoltIcon, MagicWandIcon, RocketIcon} from "@radix-ui/react-icons";


const pickRandom = (arr,count) => {
    let _arr = [...arr];
    return[...Array(count)].map( ()=> _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0] );
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
    "product experience designer",
    "creative director",
];

const Cta = () => {
    const [open, setOpen] = useState(false);
    const [desc, _setDesc] = useState(descriptor[0]);
    const animationControls = useAnimation();

    useEffect( () => {
            const setDesc = () => {
                _setDesc(pickRandom(descriptor, 1)[0]);
            };

            const animateOpen = async () => {
                animationControls.start( {
                    y: (open ? 0 : 100),
                    transition: {
                        delay: ( open ? (0.25) : (3.25)),
                        duration: 0.25,
                        ease: cubicBezier
                    }
                }).then(() => {
                    setOpen(!open);
                    if(open === false) {
                        console.log({desc})
                        setDesc();
                    }
                });
            };
            animateOpen()
        }, [open, animationControls, setOpen, _setDesc]
    )

    useEffect(() => {
        // console.log({desc})
    }, [desc])

    return(
        <motion.section variants={fadeInUp} id={'cta'}>
            <div>
                <div>
                    <div><h3>Curious to have me as your&nbsp;</h3></div>
                    <div><motion.h3 animate={animationControls}>{desc}&nbsp;</motion.h3></div>
                    <div><h3>in residence?&nbsp;</h3></div>
                </div>
                <br /><br />
                    <Link prefetch={false} href={'mailto:inquiry@lucaslorenzo.digital'}>
                        <a target={'_blank'}>
                            <h3><MagicWandIcon /> Contact for availability.</h3>
                        </a>
                    </Link>
                <br />
                <Link prefetch={false} href={'https://docsend.dropbox.com/view/634e968japzmr8c9'}>
                    <a target={'_blank'}>
                        <h3><LightningBoltIcon /> Explore my capabilities and offerings in more detail.</h3>
                    </a>
                </Link>

            </div>
        </motion.section>
    )
}

export default Cta;