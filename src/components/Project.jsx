import React from 'react';
import { RiGithubFill, RiArrowRightUpFill } from 'react-icons/ri'

const Project = ({ image, title, description, gh_code, deploy }) => {
    return (
        <div className='project__container'>
            <div className='project__image'>
            <a href={deploy} target='_blank'><img src={image} alt='image' className='project__img' /></a>
            </div>
            <div className='project__content'>
                <h4>{title}</h4>
                <p>{description}</p>
                <div className='project__icons'>
                    <a href={gh_code} target='_blank'><RiGithubFill/></a>
                    <a href={deploy} target='_blank'><RiArrowRightUpFill/></a>
                </div>
            </div>
        </div>
    );
}

export default Project;
