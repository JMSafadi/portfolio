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
                <h3 className='title'>About me</h3>
                <p className='about__me'>I am full-stack javascript web developer looking for my first IT work experience to help launch my career. Specialized in React, interested in deploying scalable and user-friendly projects while considering UX strategies. I would like to be part of a team, surrounded by experienced people, and help achieve objectives. At the same time, I want to continue learning new tools and technologies constantly.
                </p>
            </div>
        </div>
    );
}

export default About;
