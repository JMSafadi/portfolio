import React from 'react';
import '../../styles/containers/_contact.scss'
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine, RiPhoneLine, RiTwitterFill } from 'react-icons/ri'
import UpBtn from '../../components/UpBtn';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_3mqq70d', 'template_x3u31b9', e.target, 'hJgDsIzvj6sFsRMki')
        .then(response => alert('Mensaje enviado!'))
        .catch(error => console.log(error))
    }


    return (
        <div className='contact__section section__margin' id='contact'>
            <div className='contact__info'>
                <div className='title__detail'></div>
                <h2 className='contact__title'>Contactame</h2>
                <div className='contact__email'>
                    <RiMailLine/>
                    <p>julianmatiassafadi@hotmail.com</p>
                </div>
                <div className='contact__phone'>
                    <RiPhoneLine/>
                    <p>+54 9 11 2461-1357</p>
                </div>
            </div>
            <div className='contact__icons'>
                <a href='https://www.linkedin.com/in/juliansafadi/' target='_blank'><RiLinkedinBoxFill color='white' size={25} type='button' className='btn__linkedin'></RiLinkedinBoxFill></a>
                <a href='https://github.com/JMSafadi' target='_blank'><RiGithubFill color='white' size={25} type='button' className='btn__github'>Gith</RiGithubFill></a>
                <a href='https://twitter.com/jumasa0' target='_blank'><RiTwitterFill color='white' size={25} type='button' className='btn__twitter'>Twitter</RiTwitterFill></a>
            </div>
            <div className='contact__form__container'>
                <form className='contact__form' onSubmit={sendEmail}>

                    <input type='text'
                     name='user_name'
                     placeholder='Tu nombre' 
                     className='input__name'
                     />

                    <input type='text'
                     name='user_email'
                     placeholder='Tu email' 
                     className='input__mail'
                     />

                    <textarea type='text'
                     name='user_message'
                     placeholder='Mensaje'
                     className='input__message'
                     />

                    <button type='submit' className='btn__submit'>Enviar</button>
                </form>
            </div>
        <UpBtn/>
        </div>
    );
}

export default Contact;
