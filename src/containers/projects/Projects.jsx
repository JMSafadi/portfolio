import React, { useEffect } from 'react';
import '../../styles/containers/_projects.scss'
import image from '../../assets/apps.png'
import Project from '../../components/Project';

import projectimg from '../../assets/to-do-list-img.png'
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { motion } from 'framer-motion';


const Projects = () => {

    const { ref, inView } = useInView({
        threshold: 0.3
    })
    const animation = useAnimation()

    useEffect(() => {
        console.log('Use effect hook, inView =', inView)
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
                    <h3 className='projects__title'>Mis proyectos</h3>
                    <img src={image} alt='image' className='projects__image'/>
                </div>
            </motion.div>
            <motion.div className='projects__grid' animate={animation}>
                <Project image={projectimg} gh_code='https://github.com/JMSafadi/to-do-list' deploy='https://jmsafadi.github.io/to-do-list/' title='Lista de tareas' description='Un recordatorio donde podes agregar y eliminar tus tareas diarias. Uno de mis primeros proyectos usando React, SCSS y Bootstrap'/>
                <Project image={projectimg} title='Proyecto numero 2' description='Este fue mi primer proyecto, landing page de frontendmentorchallenges'/>
                <Project image={projectimg} title='Proyecto numero 3' description='Este fue mi primer proyecto, landing page de frontendmentorchallenges'/>
            </motion.div>
        </div>
    );
}

export default Projects;
