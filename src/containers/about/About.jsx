import React from 'react';
import '../../styles/containers/_about.scss'
import animation2 from '../../assets/animation2.png'

const About = () => {
    return (
        <div className='about section__padding' id='about'>
            <div className='image'>
                <img src={animation2} alt='image'/>
            </div>
            <div className='about__container'>
                <div className='title__detail'></div>
                <h3 className='title'>Sobre mi</h3>
                <p className='about__me'>Desarrollador web frontend en busca de mi primera experiencia laboral en IT, que me ayude a lanzar mi carrera. Especializado en React, interesado en desplegar proyectos escalables y amigables para el usuario tomando en cuenta las estrategias de UX. Me gustaría ser parte de un equipo de trabajo, rodearme de personas con mas experiencia y ayudar a cumplir los objetivos.</p>
            </div>
        </div>
    );
}

export default About;
