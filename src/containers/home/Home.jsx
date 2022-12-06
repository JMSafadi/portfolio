import React from 'react';
import '../../styles/containers/_home.scss'
import '../../styles/_settings.scss'
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from 'react-icons/ri'
import image1 from '../../assets/Illustration.png'
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className='home section__padding' id='home' >
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
                <h1 className='gradient__text welcome'>Bienvenido, </h1>
                <h1 className='gradient__text'>Mi nombre es Julián Safadi</h1>
                <p>Soy desarrolador front-end, en busca de mi primer experiencia laboral</p>
                <div className='btn'>
                    <a href='#contact'><button type='button' className='btn__contact gradient__button'>Contactame</button></a>
                    <div className='btn__icons'>
                        <a href='https://www.linkedin.com/in/juliansafadi/' target='_blank'><RiLinkedinBoxFill color='white' size={25} className='btn__linkedin'></RiLinkedinBoxFill></a>
                        <a href='https://github.com/JMSafadi' target='_blank'><RiGithubFill color='white' size={25} type='button' className='btn__github'>Gith</RiGithubFill></a>
                        <a href=''><RiTwitterFill color='white' size={25} type='RiTwitterFill' className='btn__twitter'>Twitter</RiTwitterFill></a>
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
