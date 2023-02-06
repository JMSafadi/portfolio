import React, { useEffect } from 'react';
import '../../styles/containers/_projects.scss'
import image from '../../assets/apps.png'
import Project from '../../components/Project';

import project1img from '../../assets/to-do-list-img.png'
import project2img from '../../assets/gh-user-searcher.png'
import project3img from '../../assets/jumasamovies.png'
import project4img from '../../assets/form.png'
import project5img from '../../assets/pokeduxpre.png'
import project6img from '../../assets/petgram.png'

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
            <motion.div className='projects__grid' animate={animation}>
                <Project image={project4img} gh_code='https://github.com/JMSafadi/challenge' deploy='https://jmsafadi.github.io/challenge/' title='Formulario de encuesta' description='Formulario que genere inputs con informacion de un JSON. Las respuestas se envian a una BDD Firebase y se muestran en otra ruta.'/>
                <Project image={project5img} gh_code='https://github.com/JMSafadi/pokedux' deploy='https://pokedux-app.web.app/' title='Pokedux' description='Aplicacion consumiendo pokeAPI que muestra Pokemons de distintos tipos. Podes filtrar y escoger tus favoritos. Estado controlado con Redux.'/>
                <Project image={project6img} gh_code='https://github.com/JMSafadi/petgram-app' title='Petgram' description='Con la API de TheMovieDB desarrolle esta aplicacion de peliculas y series. Podes buscar por genero, tendencias, o el nombre de tu favorita.'/>
            </motion.div>
            <motion.div className='projects__content' animate={animation}>
                <div className='projects__title__container'>
                    <div className='title__detail'></div>
                    <h3 className='projects__title'>Mis proyectos</h3>
                    <img src={image} alt='image' className='projects__image'/>
                </div>
            </motion.div>
            <motion.div className='projects__grid' animate={animation}>
                <Project image={project1img} gh_code='https://github.com/JMSafadi/to-do-list' deploy='https://jmsafadi.github.io/to-do-list/' title='Lista de tareas' description='Un recordatorio donde podes agregar y eliminar tus tareas diarias. Uno de mis primeros proyectos usando React, SCSS y Bootstrap'/>
                <Project image={project2img} gh_code='https://github.com/JMSafadi/gh-users-searcher' deploy='https://jmsafadi.github.io/gh-users-searcher/' title='GitHub Buscador' description='En esta aplicacion vas a poder buscar cualquier perfil registrado en GitHub. Utilice React, MaterialUI y consumi la API de los perfiles de GitHub'/>
                <Project image={project3img} gh_code='https://github.com/JMSafadi/jumasa-movies' title='Jumasa Movies' description='Con la API de TheMovieDB desarrolle esta aplicacion de peliculas y series. Podes buscar por genero, tendencias, o el nombre de tu favorita.'/>
            </motion.div>
        </div>
    );
}

export default Projects;
