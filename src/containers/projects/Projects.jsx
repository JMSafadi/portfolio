import React, { useEffect } from 'react';
import '../../styles/containers/_projects.scss'
import Project from '../../components/Project';

import project1img from '../../assets/batatabit-img.png'
import project2img from '../../assets/gh-user-searcher.png'
import project3img from '../../assets/jumasamovies.png'
import project4img from '../../assets/form.png'
import project5img from '../../assets/pokeduxpre.png'
import project6img from '../../assets/app screenshoot.png'

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
                    <h3 className='projects__title'>Mis proyectos</h3>
                </div>
            </motion.div>
            <motion.div animate={animation}>
                <Project image={project1img} gh_code='https://github.com/JMSafadi/crypto-exchange-batatabit' deploy='https://batatabitcrypto.web.app/' title='Batatabit Crypto' description='En Batatabit tenes informacion sobre las 30 criptomonedas con mayor capitalizacion de mercado. Podes ver su precio, ranking, y variacion en las ultimas 24 horas. Los estilos fueron hechos con CSS puro, sin librerias, y es responsive para acceder desde cualquier dispositivo.'/>
                <Project image={project4img} gh_code='https://github.com/JMSafadi/challenge' deploy='https://jmsafadi.github.io/challenge/' title='Formulario de encuesta' description='Aplicacion creada con React que lee un archivo JSON y genera con cada item una interfaz de encuesta. Las respuestas de la encuesta son enviadas a una base de datos de Firebase para luego ser mostradas, en formato de tabla, en otra ruta.'/>
                <Project image={project5img} gh_code='https://github.com/JMSafadi/pokedux' deploy='https://pokedux-app.web.app/' title='Pokedux' description='Consumiendo la API de pokeAPI, hice esta aplicacion donde podes ver 50 pokemons, su clase e imagen. El estado global de la aplicacion es manejado con Redux. Podes filtrar por nombre y escoger tus favoritos.'/>
                <Project image={project2img} gh_code='https://github.com/JMSafadi/gh-users-searcher' deploy='https://jmsafadi.github.io/gh-users-searcher/' title='GitHub Searcher' description='Buscador de perfiles de Github. Podes buscar cuaquier usuario y su informacion, por ejemplo, descripcion, cantidad de repositorios, seguidores y seguidos. Lo estile con MaterialUI y consumi la API de Github Profiles.'/>
                <Project image={project6img} gh_code='https://github.com/JMSafadi/ecommerce-app' deploy='https://jmsafadi.github.io/ecommerce-app/' title='Juma Sports' description='E-commerce de ropa deportiva. Use la integracion de Paypal API para pagos, React Helmet para el SEO y Google Maps API para ver ubicacion del envio.'/>
                <Project image={project3img} gh_code='https://github.com/JMSafadi/jumasa-movies' title='Jumasa Movies' description='Con la API de TheMovieDB desarrolle esta aplicacion de peliculas y series. Podes buscar por genero, tendencias, o el nombre de tu favorita.'/>
            </motion.div>
        </div>
    );
}

export default Projects;
