import React from 'react';
import '../../styles/containers/_skills.scss'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import sass from '../../assets/sass.png'
import javascript from '../../assets/javascript.svg'
import react from '../../assets/react.png'
import git from '../../assets/git.png'
import redux from '../../assets/redux.svg'
import ts from '../../assets/typescript.png'
import tailwind from '../../assets/tailwind.png'

const Skills = () => {
    return (
        <div className='skills section__padding section__margin' id='technologies'>
            <div className='skills__title-section'>
                <div className='title__detail gradient__background'></div>
                <h3 className='skills__title'>Technologies</h3>
            </div>
            <div className='skills__logos'>
                <img src={html} alt='html' className='html'/>
                <img src={css} alt='css' className='css'/>
                <img src={sass} alt='sass' className='sass'/>
                <img src={javascript} alt='javascript' className='javascript'/>
                <img src={ts} alt='ts' className='ts'/>
                <img src={react} alt='react' className='react'/>
                <img src={tailwind} alt='tailwind' className='tailwind'/>
                <img src={redux} alt='redux' className='redux'/>
                <img src={git} alt='git' className='git'/>
            </div>
        </div>
    );
}

export default Skills;
