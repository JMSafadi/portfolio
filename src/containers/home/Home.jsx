import React from 'react';
import '../../styles/containers/_home.scss'
import '../../styles/_settings.scss'
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from 'react-icons/ri'
import image1 from '../../assets/header-ilustration.png'
import { motion } from 'framer-motion';
import css from '../../assets/css.png'
import html from '../../assets/html.png'
import javascript from '../../assets/javascript.svg'
import tailwind from '../../assets/tailwind.png'
import react from '../../assets/react.png'
import git from '../../assets/git.png'


const Home = () => {
    return (
        <div className='home' id='home' >
            <motion.div className='home__content' 
            initial={{
                x: 500,
                opacity: 0,
                slace: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                slace: 1,
            }}
            transition={{
                duration: 1.5,
            }}>
                <h1 className='gradient__text welcome'>Welcome! </h1>
                <h1 className='gradient__text' style={{whiteSpace: 'nowrap', fontSize: '46px'}}>My name is Julian Safadi</h1>
                <p>Front-end developer based in Argentina</p>
                <div className='tech__container'>
                    <img src={html} alt='html-logo'/>
                    <img src={css} alt='css-logo'/>
                    <img src={javascript} alt='javascript-logo'/>
                    <img src={react} alt='react-logo'/>
                    <img src={tailwind} alt='tailwind-logo'/>
                    <img src={git} alt='git-logo'/>
                </div>
                <div className='btn'>
                    <a href='#contact'><button type='button' className='btn__contact gradient__button'>Contact</button></a>
                    <div className='btn__icons'>
                        <a href='https://www.linkedin.com/in/juliansafadi/' target='_blank'><RiLinkedinBoxFill color='white' size={25} className='btn__linkedin'></RiLinkedinBoxFill></a>
                        <a href='https://github.com/JMSafadi' target='_blank'><RiGithubFill color='white' size={25} type='button' className='btn__github'>Gith</RiGithubFill></a>
                        <a href='https://twitter.com/jumasa0' target='_blank'><RiTwitterFill color='white' size={25} type='RiTwitterFill' className='btn__twitter'>Twitter</RiTwitterFill></a>
                    </div>
                </div>
            </motion.div>
            <motion.div className='images' 
            initial={{
                x: -500,
                opacity: 0,
                slace: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                slace: 1,
            }}
            transition={{
                duration: 1.5,
            }}>
                <img className='image1' src={image1} alt='image1'/>
            </motion.div>
        </div>
    );
}

export default Home;
