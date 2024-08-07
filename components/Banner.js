import {Background} from "./index";
import {motion} from "framer-motion";
import {cubicBezier, slideUp, staggerBanner} from "../animations/animations";
import {ArrowRightIcon} from "@radix-ui/react-icons";
import React from "react";
import style from './Banner.module.scss';

const Banner = ({scrollCallBack}) => {
    return (
        <motion.div
            className={style.BannerWrapper}
            id={'bannerWrapper'}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                    ease: cubicBezier,
                    duration: 0.25,
                    delay: 0.5
                }
            }}
        >
            <Background/>
            <div style={{zIndex: 2}} id={'gradient'}>
            </div>
            <motion.section id={'banner'} initial='initial' animate='animate' variants={staggerBanner}>
                <div>
                    {
                        "Future-proofing a business is a task too important to outsource, and too wicked to solve without expertise.".split(' ').map((word, index) =>
                            <div key={index}>
                                <motion.h1 variants={slideUp}>{word}&nbsp;</motion.h1>
                            </div>)
                    }
                </div>
                <div>
                    {
                        "I'm an innovation strategist player-coach with 11 years of proven experience in solving current and future problems through research, development, education, tools, tech, creativity, and systems.".split(' ').map((word, index) =>
                            <div key={index}>
                                <motion.h4 variants={slideUp}>{word}&nbsp;</motion.h4>
                            </div>)
                    }
                </div>
                <div>
                    <motion.div
                        whileHover={{scale: 1.05}}
                        transition={{duration: 0.125}}
                    >
                        <motion.button
                            variants={slideUp}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollCallBack()
                            }}
                        >
                            <p>Learn more</p>
                            <motion.span>
                                <ArrowRightIcon/></motion.span>
                        </motion.button>
                    </motion.div>
                </div>

            </motion.section>
        </motion.div>
    )
}

export default Banner;