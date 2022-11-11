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
                <p className='about__me'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    );
}

export default About;
