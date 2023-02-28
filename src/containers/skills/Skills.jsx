import React from 'react';
import '../../styles/containers/_skills.scss'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import sass from '../../assets/sass.png'
import javascript from '../../assets/javascript.svg'
import react from '../../assets/react.png'
import git from '../../assets/git.png'
import redux from '../../assets/redux.svg'
import mui from '../../assets/material-ui.svg'
import vue from '../../assets/vue-logo.png'

const Skills = () => {
    return (
        <div className='skills section__padding section__margin' id='skills'>
            <div className='skills__logos'>
                <img src={html} alt='html' className='html'/>
                <img src={css} alt='css' className='css'/>
                <img src={sass} alt='sass' className='sass'/>
                <img src={javascript} alt='javascript' className='javascript'/>
                <img src={react} alt='react' className='react'/>
                <img src={vue} alt='vue' className='vue'/>
                <img src={redux} alt='redux' className='redux'/>
                <img src={git} alt='git' className='git'/>
                <img src={mui} alt='mui' className='mui'/>
            </div>
            <div className='skills__title-section'>
                <div className='title__detail gradient__background'></div>
                <h3 className='skills__title'>Tecnologías</h3>
            </div>
        </div>
    );
}

export default Skills;
