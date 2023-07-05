import React, { useEffect } from 'react';
import '../../styles/containers/_projects.scss'
import Project from '../../components/Project';

import project1img from '../../assets/batatabit-img.png'
import project2img from '../../assets/gh-user-searcher.png'
import project3img from '../../assets/helix-eye.png'
import project4img from '../../assets/pistacho.png'
import project5img from '../../assets/pokeduxpre.png'
import project6img from '../../assets/clothify.png'

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { motion } from 'framer-motion';


const Projects = () => {
    const { ref, inView } = useInView({
        threshold: 0.3
    })
    const animation = useAnimation()

    useEffect(() => {
        if(inView){
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1.5, bounce: 0.4
                }
            })
        }
        if(!inView) {
            animation.start({x:'-100vw'})
        }
    }, [inView])

    return (
        <div ref={ref} className='projects__section padding_section' id='projects'>
            <motion.div className='projects__content' animate={animation}>
                <div className='projects__title__container'>
                    <div className='title__detail'></div>
                    <h3 className='projects__title'>My projects</h3>
                </div>
            </motion.div>
            <motion.div className='projects__grid' animate={animation}>
                <Project image={project4img} gh_code='' deploy='https://www.bypistacho.com/' title='By Pistacho' description="This was my first freelance job. A website created with WordPress and Divi Builder for a product company. Based on the client's requirements, I am still providing maintenance and will add new features in the future."/>
                <Project image={project1img} gh_code='https://github.com/JMSafadi/crypto-exchange-batatabit' deploy='https://batatabitcrypto.web.app/' title='Batatabit Crypto' description='At Batatabit, you can find information about the top 50 cryptocurrencies by market capitalization. You can view their price, ranking, and 24-hour variation.'/>
                <Project image={project3img} gh_code='https://github.com/JMSafadi/helix-eye' deploy='https://helix-eye.web.app/' title='Helix Eye' description="At Helix Eye, you can see real information about outer space and its galaxies. The information is provided by NASA's official API."/>
                <Project image={project6img} gh_code='https://github.com/JMSafadi/clothify' deploy='https://shop-clothify.web.app/' title='Clothify' description="Clothify is an e-commerce website built with React and styled with TailwindCSS. You can add as many items as you want to your shopping cart and view each product in detail on a separate route. It is responsive for any device."/>
                <Project image={project5img} gh_code='https://github.com/JMSafadi/pokedux' deploy='https://pokedux-app.web.app/' title='Pokedux' description='Using the pokeAPI, I created this React application where you can view 50 Pokemon, their types, and images. The global state of the application is managed with Redux. You can filter by name and choose your favorites.'/>
                <Project image={project2img} gh_code='https://github.com/JMSafadi/gh-users-searcher' deploy='https://jmsafadi.github.io/gh-users-searcher/' title='GitHub Searcher' description='Github profile finder developed with React. You can search for any user and their information. For example, description, number of repositories, followers, and following. I styled it with MaterialUI and consumed the Github Profiles API.'/>
            </motion.div>
        </div>
    );
}

export default Projects;
