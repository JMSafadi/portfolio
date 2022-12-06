import React from 'react';
import '../../styles/containers/_about.scss'
import image from '../../assets/aasd.png'

const About = () => {
    return (
        <div className='about section__margin' id='about'>
            <div className='image'>
                <img src={image} alt='image' className='image'/>
            </div>
            <div className='about__container'>
                <div className='title__detail'></div>
                <h3 className='title'>Sobre mi</h3>
                <p className='about__me'>Si bien siempre fui un apasionado por la tecnologia, hace un tiempo decidi adentrarme en el mundo del desarrollo. Me considero una persona innovadora y creativa.  Me gustaría ser parte de un equipo de trabajo y colaborar en el cumplimiento de sus objetivos. Mi tecnología favorita es ReactJS, aunque estoy constantemente aprendiendo nuevas herramientas y practicando en proyectos propios.</p>
            </div>
        </div>
    );
}

export default About;
